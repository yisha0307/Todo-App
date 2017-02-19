import React, {Component} from 'react'
import FilterLink from '../containers/filterlink.jsx'

import '../node_modules/font-awesome/css/font-awesome.css';

const Footer = () => (
	<div className = 'todo-footer'>
		<FilterLink filter ='SHOW_ALL'>
		<i className='fa fa-list-ul' />
		</FilterLink>
		<FilterLink filter ='SHOW_ACTIVE'>
		<i className = 'fa fa-times' />
		</FilterLink>
		<FilterLink filter ='SHOW_COMPLETED'>
		<i className="fa fa-check"/>
		</FilterLink>
	</div>);

export default Footer