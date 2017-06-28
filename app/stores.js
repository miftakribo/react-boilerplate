import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

export default function configureStore(/*initialState = {}, history*/) {
  const middleware = applyMiddleware(
    promise(),
    thunk
  )
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleware)
  )

  return store
}
