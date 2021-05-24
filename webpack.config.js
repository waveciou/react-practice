const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROJECTS = [ 'index', 'todolist', 'foodchecked' ];

// HTML
const HTML_PROVIDER = PROJECTS.map(name => {
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `./src/${name}.html`,
    minify: true,
    inject: false
  });
});

// JavaScript Entry
const ENTRY_PROVIDER = {};

PROJECTS.forEach(name => {
  const _name = name === 'index' ? 'main' : name;
  ENTRY_PROVIDER[_name] = path.resolve(__dirname, `./src/resources/js/${_name}.js`);
});

// 主要設定
module.exports = {
  entry: ENTRY_PROVIDER,
  output: {
    filename: './resources/js/[name].js',
    path: path.resolve(__dirname, './dist')
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(scss|sass)$/i,
        include: path.resolve('./src/resources/scss'),
        exclude: path.resolve('./node_modules'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { 
              publicPath: '../../',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer']
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpge|gif)$/,
        include: path.resolve('./src/resources/img'),
        exclude: path.resolve('./node_modules'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './resources/img',
            publicPath: '../img/'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './resources/css/[name].css'
    }),
    ...HTML_PROVIDER
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 3000,
    stats: {
      assets: true,
      cached: false,
      chunkModules: false,
      chunkOrigins: false,
      chunks: false,
      colors: true,
      hash: false,
      modules: false,
      reasons: false,
      source: false,
      version: false,
      warnings: false
    }
  }
};