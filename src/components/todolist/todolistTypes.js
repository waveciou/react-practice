import React, { useState } from 'react';

const todoTypes = (props) => {
  const { todoType, changeTodoType } = props;
  const [ typeList, setTypeList ] = useState([
    {
      id: '2',
      name: 'All'
    },
    {
      id: '1',
      name: 'True'
    },
    {
      id: '0',
      name: 'False'
    }
  ]);

  return (
    <div className="todolist__type">
      {
        typeList.map(item => {
          const { id, name } = item;

          return (
            <div className="todolist__type-item" key={id}>
              <button
                className={`btn ${ todoType === id ? 'current' : '' }`}
                onClick={ () => { changeTodoType(id); } }
              >{ name }</button>
            </div>
          );
        })
      }
    </div>
  );
};

export default todoTypes;