import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
import { middlewares } from './index'
import reducer from './reducer'
import { server } from './mocks/server'

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(...middlewares)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}



beforeAll(() => {
  // Enable the mocking in tests.
  server.listen()
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }