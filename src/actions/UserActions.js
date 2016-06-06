/*eslint-disable no-unused-vars*/

import {
	LOGIN_REQUEST,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS
} from '../constants/User'

import { ROUTING} from '../constants/Routing'

export function login(payload){
	return (dispatch) => {
		dispatch({
			type:LOGIN_REQUEST
		})
		
		setTimeout(() => {
			dispatch ({
				type: LOGIN_SUCCESS,
				payload:{
					name: payload.name,
					isAuthenticated: true
				}
			})
			dispatch({
				type:ROUTING,
				payload:{
					method: 'replace',
					nextUrl: '/admin'
			}
		})

		}, 3000)

	
	}
}

export function logout(){
	return {
		type:LOGOUT_SUCCESS
	}
}

/*eslint-disable no-unused-vars*/

