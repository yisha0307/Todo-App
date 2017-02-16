// 我的两个reducer是visibilityFilter和todos，其实也是store.getState()得到的两种state，我的state长这样：
// {
// filter:'SHOW_ALL',
// todos:[
// {id: 1,
// text:'123445',
// completed: false},{
// ...},{
// ...}]
// }
import {combineReducers} from 'redux'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type){
		case 'SET_VISIBILITY':
			return action.filter;
		default:
			return state;
	}
}

const todos = (state = [], action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [...state, {id:action.id, text: action.text, completed:false}];
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if(todo.id !== action.id){
					return todo;
				}
				return (Object.assign({}, todo, {completed: !todo.completed}))
			});
		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp  //todoApp是最后的reducer