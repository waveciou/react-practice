const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 環境變數
console.log(process.env.NODE_ENV);

const HTML_COLLECTIONS = [ 'index', 'todolist' ];

const HTML_PROVIDER = HTML_COLLECTIONS.map(name => {
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `./src/${name}.html`,
    minify: true,
    inject: false
  });
});

// 主要設定
module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/resources/js/main.js'),
    todolist: path.resolve(__dirname, './src/resources/js/todolist.js')
  },
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