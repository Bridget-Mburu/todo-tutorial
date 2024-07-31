import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = [
    { id: 1, title: "todo one", description: "lotem ispum lorem" },
    { id: 2, title: "todo two", description: "lotem ispum lorem" },
    { id: 3, title: "todo three", description: "lotem ispum lorem" },
    { id: 4, title: "todo four", description: "lotem ispum lorem" },
  ];
    return (
      <div id="todoList">
        <p>{}</p>
        Todo List Container
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
}

export default TodoList