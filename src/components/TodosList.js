import React from 'react';

export const TodosList = ({todos}) => {
    return (
        <div>
            {
                todos.map(todo =>
                <div key={todo.id}>
                    <h3>{todo.id} - {todo.title}</h3>
                </div>)
            }
        </div>
    )
}