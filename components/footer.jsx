import React, {Component} from 'react'
import FilterLink from './filterlink.jsx'

const Footer = ({currentFilter,handleClick}) => (
	<div className = 'todo-footer'>
		<FilterLink filter ='SHOW_ALL' currentFilter={currentFilter} onClick={(filter) => handleClick(filter)}>
		{'ALL'}
		</FilterLink>
		<FilterLink filter ='SHOW_COMPLETED' currentFilter={currentFilter} onClick={(filter) => handleClick(filter)}>
		{'  COMPLETED'}
		</FilterLink>
		<FilterLink filter ='SHOW_COMPLETED' currentFilter={currentFilter} onClick={(filter) => handleClick(filter)}>
		{'  ACTIVE'}
		</FilterLink>
	</div>);

export default Footer