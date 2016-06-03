import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {

	render() {
		
		return (
			<div className='container'>
				<h1>APP</h1>
				<ul>
					<li><Link to='/admin'>Admin</Link></li>
					<li><Link to='/genre'>Genre</Link></li>
				</ul>

				{/* вывод потомков, тоесть выводим содержимое компонетов Admin/Genre */}
				{ this.props.children}
			</div>
		) 
	}
}
