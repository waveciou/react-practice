import React from 'react';

const todoTypes = (props) => {
  const { todoType, changeTodoType } = props;

  return (
    <div className="todolist__header">
      <div className="todolist__type">
        <input
          type="radio"
          id="type_all"
          value="2"
          checked={ todoType === '2' }
          onChange={ changeTodoType }
        />
        <label htmlFor="type_all">All</label>
      </div>
      <div className="todolist__type">
        <input
          type="radio"
          id="type_true"
          value="1"
          checked={ todoType === '1' }
          onChange={ changeTodoType }
        />
        <label htmlFor="type_true">True</label>
      </div>
      <div className="todolist__type">
        <input
          type="radio"
          id="type_false"
          value="0"
          checked={ todoType === '0' }
          onChange={ changeTodoType }
        />
        <label htmlFor="type_false">False</label>
      </div>
    </div>
  );
};

export default todoTypes;