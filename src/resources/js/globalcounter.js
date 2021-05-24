import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/globalCounter/globalCounterApp';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from '../../components/globalCounter/reducers';

/*
  使用 createStore 綁定 Reducers 到 Store
 */
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*
  使用 <Provider> 綁定 Store 到 Component
  這個 Component 底下的所有 Component 都可以取用 Store 的資料
 */
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('app'));