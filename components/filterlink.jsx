import React from 'react'

const FilterLink = ({filter,currentFilter, onClick, children}) => (
	<a href='#' onClick={e => {
		onClick(filter);
		e.preventDefault();		
	}} >
	{children}
	</a>
	)

export default FilterLink