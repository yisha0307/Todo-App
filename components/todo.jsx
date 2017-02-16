import React from 'react'

const Todo = ({text, completed, onClick}) => (
	<li onClick={onClick} className = {completed? 'todo-todo todo-todo-completed' :'todo-todo'}>
	{text}
	</li>)

export default Todo