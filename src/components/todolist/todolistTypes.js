import React from 'react';

const todoTypes = (props) => {
  const { todoType, changeTodoType } = props;

  return (
    <div>
      <div>
        <input
          type="radio"
          value="2"
          checked={ todoType === '2' }
          onChange={ changeTodoType }
        />
        <label>全部</label>
      </div>
      <div>
        <input
          type="radio"
          value="1"
          checked={ todoType === '1' }
          onChange={ changeTodoType }
        />
        <label>True</label>
      </div>
      <div>
        <input
          type="radio"
          value="0"
          checked={ todoType === '0' }
          onChange={ changeTodoType }
        />
        <label>False</label>
      </div>
    </div>
  );
};

export default todoTypes;