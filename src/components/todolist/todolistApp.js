import React, { useState, useEffect } from 'react';
import TodoItem from './todolistItem';
import TodoTypes from './todolistTypes';

const App = () => {
  const [ todolist, setTodolist ] = useState([]);
  const [ todoType, setTodoType ] = useState('2');
  const [ todoInput, setTodoInput ] = useState('');

  // Mounted
  useEffect(() => {
    console.log('mounted');

    let todos = [];

    for (let i = 0; i < 10; i++) {
      const id = `${getCurrentId()}_${i + 1}`;

      todos.push({
        id: id,
        name: id,
        status: false
      });
    }

    setTodolist(todos);
  }, []);

  // Watch And Computed
  useEffect(() => {
    console.log('Data has change');
  }, [ todolist ]);

  // Method
  const changeTodoType = (value) => {
    setTodoType(value);
  };

  const changeStatus = (id) => {
    let todos = [...todolist];
    let index = todos.findIndex(todo => todo.id === id);
    todos[index].status = !todos[index].status;
    setTodolist(todos);
  };

  const getCurrentId = () => {
    const date = new Date();
    return date.getTime();
  };

  const submitHandler = () => {
    if (todoInput === '') return false;

    let _todoList = [...todolist];

    const result = {
      id: `${getCurrentId()}`,
      name: todoInput,
      status: false
    };

    _todoList.push(result);
    setTodolist(_todoList);
    setTodoInput('');
  };

  return (
    <div className="todolist">
      <div className="todolist__header">
        <div className="todolist__header-fieldset">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => {
              const result = (e.target.value).trim();
              setTodoInput(result);
            }}
          />
        </div>
        <div className="todolist__header-control">
          <button
            className="btn"
            onClick={() => { submitHandler(); }}
          >submit</button>
        </div>
      </div>

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