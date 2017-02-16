import React from 'react'

const FilterLink = ({filter,currentFilter, onClick, children}) => (
	<a href='#' className = {
		filter === currentFilter? 'todo-filterlink todo-filterlink-already' : 'todo-filterlink'
	} onClick={e => {
		filter !== currentFilter ? onClick(filter) : false;
		e.preventDefault();		
	}} >
	{children}
	</a>
	)

export default FilterLink