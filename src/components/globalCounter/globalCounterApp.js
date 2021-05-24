import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { increment, decrement } from './actions';

const globalCounterApp = () => {
  // useSelector hooks 可以取得 state 的資料
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  // useDispatch hooks 可以呼叫 actions function
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h1>Counter { counter }</h1>
      <button onClick={ () => { dispatch(increment(5)); } }>+</button>
      <button onClick={ () => { dispatch(decrement(5)); } }>-</button>

      { isLogged ? <h3>You are logged</h3> : '' }
    </div>
  );
};

export default globalCounterApp;

/*
  → 在 reducer 定義 state 的預設值以及修改 state 的行為（在 vuex 裡面叫做 mutation）
  → 把所有的 reducer 寫進 store，並綁定在最上層的 component 裡面

  → 使用 dispatch 去打 actions function
  → actions function 會被打進 reducer 裡面，此時所有的 reducer 都會被執行，
    所以在 action 裡面需要用 type 來判斷要做什麼動作（mutation）
  → 在 reducer 裡面使用 switch 判斷，並回傳修改後的 state
 */