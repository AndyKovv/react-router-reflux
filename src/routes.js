import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './containers/App'

import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import NotFound from './components/NotFound'
import List from './components/List'
import Relase from './components/Relase'


export const routes = ( 
	<div>
		<Route path='/' component={App}> {/* Компонеты будут рендериться в середине указаной компоненты тоесть будут детьми App*/}
			<IndexRoute component={Home} /> {/* Задаёться роут для корня тоесть для / */}
				<Route path='admin' component={Admin} /> {/* Вложили admin в Route / чтобы компоненты были доступны по URL /admin */}
					<Route path='genre/:genre' component={Genre}> {/* Для react-router это <App/> + this.props.child в нашем случае это <App/> + <Genre/> */}
						<Route path='genre/:genre/:relase' component={Relase} />
				</Route>
			<Route path='list' component={List} />
		</Route>
		<Route path='*' component={NotFound} /> {/* Для роутов которые не подошли показываем страницу 404 */}
	</div>
)