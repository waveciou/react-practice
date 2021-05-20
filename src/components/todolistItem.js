import React from 'react';

const todoItem = (props) => {
  const { todo, index, changeStatus } = props;

  return (
    <div>
      <p>{ `${todo.name} ${todo.status}` }</p>
      <button onClick={ () => { changeStatus(index); } }>set</button>
    </div>
  );
};

export default todoItem;