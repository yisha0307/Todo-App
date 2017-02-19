import React,{Component} from 'react'

const Link = ({children, onClick}) => (
	<a href= "#" onClick ={
		e => {e.preventDefault();
		onClick();}
	}>{children}</a>);

export default Link
