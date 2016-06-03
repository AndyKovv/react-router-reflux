import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import { Router, browserHistory /*hashHistory*/ } from 'react-router'

import {routes} from './routes'

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('root')
)