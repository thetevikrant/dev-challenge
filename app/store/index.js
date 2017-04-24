import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducers from '../reducers'

//create the middleware with logging to console options
const middleware = applyMiddleware(promise(), thunk, logger());

//create store with reducers and middleware bind.
export default createStore(reducers, middleware);