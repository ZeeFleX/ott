import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';

//Components
import App from './containers/App';

//Global styles
import './css/bootstrap-lumen.theme.css';
import './css/ui.css';

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App} />
		</Router>
	</Provider>,
  document.getElementById('root')
);
