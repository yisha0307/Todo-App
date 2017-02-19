import React, {Component} from 'react'
import todoApp from './reducers.js'
import {Provider,connect} from 'react-redux'
import {createStore, subscribe} from 'redux'
import ReactDOM from 'react-dom'

import VisibleTodoList from './containers/visibletodolist.jsx'
import AddTodo from './containers/addtodo.jsx'
import Footer from './components/footer.jsx'

import './css/styles.scss'

class TodoApp extends React.Component{
	render(){
		return(
			<div className = 'todoapp'>
				<h1>TODOS</h1>
				<VisibleTodoList />
				<AddTodo />
				<Footer />
			</div>);
	}
}

const root = document.createElement('div');
document.body.appendChild(root);

const store = createStore(todoApp);
const render = () => {
	ReactDOM.render(
		<Provider store = {store}>
			<TodoApp />
		</Provider>, root);
}

render();

