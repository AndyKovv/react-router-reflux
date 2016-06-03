import React, { Component } from 'react'
import Admin from '..//components/Admin'
import Genre from '..//components/Genre'
import Home from '..//components/Home'

export default class App extends Component {
	constructor (props){
		super(props)
		this.state = {
			route: window.location.hash.substr(1)
		}
	}
	componentDidMount(){
		window.addEventListener('hashchange', () => { //Событие hashchange при изменении мы вызываем изменнение state (Подписались на событие)
			this.setState({
				route: window.location.hash.substr(1) //Изменяем занчение  route
			})
		})
	}
	render() {
		let Child //Создаем внутреннюю переменную окружения

		switch (this.state.route) {
			case '/admin': Child = Admin; break; //Сравниваем обрезаный URL с шаблоном и присваеваем компоненте Child значение
			case '/genre': Child = Genre; break;
			default: Child = Home; //Если ни один шаблон не подошел утанавливает стандартный шаблон.
			// В этом примере мы присваиваем переменной Child компоненты в зависимости от установленого URL и рендерим его.
		}
		return (
			<div className='container'>
				<h1>APP</h1>
				<ul>
					<li><a href='#/admin'>Admin</a></li>
					<li><a href='#/genre'>Genre</a></li>
				</ul>
				<Child />
			</div>
		) 
	}
}
