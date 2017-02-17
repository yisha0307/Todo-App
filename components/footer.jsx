import React, {Component} from 'react'
import FilterLink from './filterlink.jsx'

import '../node_modules/font-awesome/css/font-awesome.css';

const Footer = ({currentFilter,handleClick}) => (
	<div className = 'todo-footer'>
		<FilterLink filter ='SHOW_ALL' currentFilter={currentFilter} onClick={handleClick}>
		<i className='fa fa-list-ul' />
		</FilterLink>
		<FilterLink filter ='SHOW_ACTIVE' currentFilter={currentFilter} onClick={handleClick}>
		<i className = 'fa fa-times' />
		</FilterLink>
		<FilterLink filter ='SHOW_COMPLETED' currentFilter={currentFilter} onClick={handleClick}>
		<i className="fa fa-check"/>
		</FilterLink>
	</div>);

export default Footer