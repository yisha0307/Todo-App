import React,{Component} from 'react'
import {connect} from 'react-redux'

let nextcode = 0;
let AddTodo = ({dispatch}) => {
	let input
	return (
		<div className = 'todo-addtodo'>
			<form onSubmit = {e => {
				e.preventDefault();
				if(!input.value.trim()){
					return
				}
				dispatch({type: 'ADD_TODO', text:input.value, id: nextcode++});
				input.value ='';
			}}>
				<input type ='text' ref={v => input =v}/>
				<button type='submit'>
					<i className='fa fa-plus'/>
				</button>
			</form>
		</div>
	)
}

AddTodo = connect()(AddTodo)

export default AddTodo
