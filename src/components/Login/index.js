import React, { Component, PropTypes } from 'react'

export default class Login extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const value = e.target.elements[0].value;
		window.localStorage.setItem('rr_login', value);
		if( value === 'admin'){
			this.context.router.push('/admin');
		}else{
			this.context.router.push('/');
		}
	}
	render(){
		return(
			<div className='row'>
				<div className='col-md-12'>Пожалуйста ведите логин:</div>
				<form className='col-md-4' onSubmit={this.handleSubmit}>
					<input type='text' placeholder='/login' />
					<button type='submit'>Войти</button>
				</form> 
			</div>
		)
	}
}

Login.contextTypes = { 
  router: PropTypes.object.isRequired
}