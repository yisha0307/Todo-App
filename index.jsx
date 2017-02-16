import React, {Component} from 'react'
import todoApp from './reducers.js'
import {createStore, subscribe} from 'redux'
import ReactDOM from 'react-dom'

import TodoList from './components/todolist.jsx'
import AddTodo from './components/addtodo.jsx'
import Footer from './components/footer.jsx'

let nextTodoId = 0; 
class TodoApp extends React.Component{
	render(){
		const {visibilityFilter, todos} = this.props;
		return (
			<div className = 'todoapp'>
				<h1>Todos</h1>
				<TodoList todos ={select(todos,visibilityFilter)} handleClick = {id => store.dispatch({type:'TOGGLE_TODO', id})}/>
				<AddTodo handleClick ={text => store.dispatch({type:'ADD_TODO', id: nextTodoId++, text})}/>
				<Footer currentFilter ={visibilityFilter} handleClick={filter => store.dispatch({type:'SET_VISIBILITY', filter})}/>
			</div>);
	}
}

function select(todos,filter){
	switch(filter){
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(todo => todo.comleted)
		case 'SHOW_ACTIVE':
			return todos.filter(todo => !todo.completed)
	}
}

const root = document.createElement('div');
document.body.appendChild(root);

const store = createStore(todoApp);
const render = () => {
	ReactDOM.render(<TodoApp {...store.getState()}/>, root);
}

store.subscribe(render);
render();

