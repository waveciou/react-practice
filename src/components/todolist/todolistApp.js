import React, { useState, useEffect } from 'react';
import TodoItem from './todolistItem';
import TodoTypes from './todolistTypes';

const App = () => {
  const [ todolist, setTodolist ] = useState([]);
  const [ todoType, setTodoType ] = useState('2');

  // Mounted
  useEffect(() => {
    console.log('mounted');

    let todos = [];

    for (let i = 0; i < 10; i++) {
      todos.push({
        id: i,
        name: `Item_${i + 1}`,
        status: false
      });
    }

    setTodolist(todos);
  }, []);

  // Watch And Computed
  useEffect(() => {
    console.log('Data has change');
    console.log(todolist);
  }, [ todolist ]);

  // Method
  const changeTodoType = (e) => {
    setTodoType(e.target.value);
  };

  const changeStatus = (id) => {
    let todos = [...todolist];
    let index = todos.findIndex(todo => todo.id === id);
    todos[index].status = !todos[index].status;
    setTodolist(todos);
  };

  return (
    <div className="todolist">
      <TodoTypes todoType={ todoType } changeTodoType={ changeTodoType } />
      <ul className="todolist__list">
        {
          todolist.filter(todo => {
            if (todoType === '0') {
              return todo.status === false;
            } else if (todoType === '1') {
              return todo.status === true;
            } else {
              return todo;
            }
          }).map(todo =>
            <li key={ todo.id }>
              <TodoItem todo={ todo } changeStatus={ changeStatus } />
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default App;