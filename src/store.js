import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { createLogger } from 'redux-logger';
import Thunk from 'redux-thunk';

//const logger = createLogger();

let store = createStore(reducers, composeWithDevTools(applyMiddleware(Thunk)));

export default store;
