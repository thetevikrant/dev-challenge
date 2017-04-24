import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import AppComponent from './components/AppComponent.jsx';
import ResultComponent from './components/ResultComponent.jsx';

import { Provider } from 'react-redux'
import store from './store'

/**
 * routing for the app and binding the view.
 *
 */
ReactDOM.render((
	<Provider store={store}>
		<Router onUpdate={() => window.scrollTo(0, 0)} history = {browserHistory}>
			<Route>
				<Route path = "/" component = {AppComponent}>
					<IndexRoute component = {ResultComponent} />
				</Route>
			</Route>
		</Router>
	</Provider>

), document.getElementById('app'))