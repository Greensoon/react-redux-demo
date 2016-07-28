import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import Counter from './components/Counter'

import configureStore from './store/configureStore'

const store = configureStore()

render(
	<Provider store={store} >
		<Counter />
	</Provider>,
	document.getElementById('root')
)