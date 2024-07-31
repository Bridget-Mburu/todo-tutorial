import React from 'react'

function TodoItem () {
    const title = 'this is my task'
    const description  = 'this is my description!'
    return (
        <div id="todolist">
            <p>{title}</p>
            <p>Description: {description}</p>
        </div>
    )
}
export default TodoItem