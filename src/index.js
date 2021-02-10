import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import App from './components/App'
import sagas from './sagas' // if you comment out this line, it will work


export const middlewares = []
export const store = createStore(reducer, applyMiddleware(...middlewares))

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const App = () => (
  <div style={styles}>
    Check out the tests! You can run them right here in codesandbox!
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)