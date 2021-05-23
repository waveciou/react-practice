import React from 'react';

const todoItem = (props) => {
  const { todo, changeStatus } = props;

  return (
    <div>
      <p>{ `${todo.name} ${todo.status}` }</p>
      <button onClick={ () => { changeStatus(todo.id); } }>set</button>
    </div>
  );
};

export default todoItem;