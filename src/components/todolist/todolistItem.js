import React from 'react';

const todoItem = (props) => {
  const { todo, changeStatus } = props;

  return (
    <div className="todolist__item">
      <div className="todolist__item-content">
        <p>Name: <span>{ `${todo.name}` }</span></p>
        <p>Status: <span>{ `${todo.status}` }</span></p>
      </div>
      <div className="todolist__item-control">
        <button
          className="btn"
          onClick={ () => { changeStatus(todo.id); } }
        >Set Status</button>
      </div>
    </div>
  );
};

export default todoItem;