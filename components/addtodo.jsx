import React,{Component} from 'react'

class AddTodo extends React.Component{
	handleref(){
		let inputv = this.input.value;
		if(inputv !== ''){
			this.props.handleClick(inputv)
		}else{
			return false
		}
		this.input.value = ''
	}
	render(){
		return (
		<div className = 'todo-addtodo'>
		<input type ='text' ref ={v => this.input =v} />
		<button onClick ={() => this.handleref()}>
		{'+'}
		</button>
		</div>);
}
}

export default AddTodo