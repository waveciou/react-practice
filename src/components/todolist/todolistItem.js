import React from 'react';

const todoItem = (props) => {
  const { todo, changeStatus } = props;

  return (
    <div className="todolist__item">
      <div className="todolist__content">
        <p>Name: <span>{ `${todo.name}` }</span></p>
        <p>Status: <span>{ `${todo.status}` }</span></p>
      </div>
      <button
        className="btn todolist__btn"
        onClick={ () => { changeStatus(todo.id); } }
      >Set Status</button>
    </div>
  );
};

export default todoItem;