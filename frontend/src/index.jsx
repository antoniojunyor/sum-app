import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './main/app'
import sumReducer from './sum/reducers'

const reducers = combineReducers({
	sum: sumReducer
})

let store = applyMiddleware(thunk)(createStore)(reducers)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app')
)