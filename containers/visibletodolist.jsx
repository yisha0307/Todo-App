import {connect} from 'react-redux'

import TodoList from '../components/todolist'

const select = (todos, filter) => {
	switch(filter){
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(todo => todo.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(todo => !todo.completed)
	}
}

const mapStateToProps = (state) => {
	return{
		todos: select(state.todos, state.visibilityFilter)
	}
}
const mapDispatchToProps = (dispatch) =>{
	return {
		handleClick: (id)=>{dispatch({type:'TOGGLE_TODO',id})}
	}
}

const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default VisibleTodoList