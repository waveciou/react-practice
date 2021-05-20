import React, { useState, useEffect } from 'react';
import TodoItem from './todolistItem';

const App = () => {
  const [ todolist, setTodolist ] = useState([]);

  // Mounted
  useEffect(() => {
    let todos = [];

    for (let i = 0; i < 10; i++) {
      todos.push({
        id: i,
        name: `項目_${i + 1}`,
        status: false
      });
    }

    setTodolist(todos);
  }, []);

  // Watch And Computed
  useEffect(() => {
    console.log('數據有變化');
    console.log(todolist);
  }, [ todolist ]);

  // Method
  const changeStatus = (index) => {
    let todos = [...todolist];
    todos[index].status = !todos[index].status;
    setTodolist(todos);
  };

  return (
    <div className="main">
      <ul>
        { todolist.map((todo, index) => 
          <li key={todo.id}>
            <TodoItem todo={ todo } index={ index } changeStatus={ changeStatus } />
          </li>
        )}
      </ul>
    </div>
  );
};

export default App;