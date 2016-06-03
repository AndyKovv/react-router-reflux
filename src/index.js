import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import NotFound from './components/NotFound'
import List from './components/List'
import Relase from './components/Relase'

import { Router, Route, IndexRoute, browserHistory /*hashHistory*/ } from 'react-router'


render(
	<Router history={browserHistory}>
		<Route path='/' component={App}> {/* Компонеты будут рендериться в середине указаной компоненты тоесть будут детьми App*/}
			<IndexRoute component={Home} /> {/* Задаёться роут для корня тоесть для / */}
			<Route path='admin' component={Admin} /> {/* Вложили admin в Route / чтобы компоненты были доступны по URL /admin */}
				<Route path='genre/:genre' component={Genre}> {/* Для react-router это <App/> + this.props.child в нашем случае это <App/> + <Genre/> */}
					<Route path=':relase' component={Relase} />
				</Route>
			<Route path='list' component={List} />
		</Route>
		{/* Для роутов которые не подошли показываем страницу 404 */}
		<Route path='*' component={NotFound} />
	</Router>,
	document.getElementById('root')
)