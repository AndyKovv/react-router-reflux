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
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			})
		})
	}
	render() {
		let Child

		switch (this.state.route) {
			case '/admin': Child = Admin; break;
			case '/genre': Child = Genre; break;
			defult: Child = Home;
		}
		return <div className='container'>Привет я из App</div> 
	}
}
