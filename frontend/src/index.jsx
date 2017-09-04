import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import sumReducer from './sum/reducers'

const reducers = combineReducers({
	sum: sumReducer
})

let store = createStore(sumReducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app')
)

		
	
