/* eslint-disable no-case-declarations */

const counterReducer = (state = 0, action) => {
  switch(action.type) {
  case 'INCREMENT':
    return state + action.payload;
  case 'DECREMENT':
    let result = state - action.payload;
    if (result < 0) { return 0; }
    return result;
  default:
    return state;
  }
};

export default counterReducer;