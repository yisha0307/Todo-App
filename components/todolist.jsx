import React from 'react'
import Todo from './todo.jsx'

const TodoList = ({todos,handleClick}) => {
	return (
		<ul className = 'todo-lists'>
		{todos.map(todo => {
			return <Todo key={todo.id} {...todo} onClick ={() => handleClick(todo.id)}/>
		})}
		</ul>)
}

export default TodoList