import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {

	render() {
		
		return (
			<div className='container'>
				<h1>APP</h1>
				<ul className='nav nav-pills'>
					<li><Link to='/admin'>Admin</Link></li>
					<li><Link to='/list'>Список жанров </Link></li>
				</ul>

				{/* вывод потомков, тоесть выводим содержимое компонетов Admin/Genre */}
				{ this.props.children}
			</div>
		) 
	}
}
