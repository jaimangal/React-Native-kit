import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';


export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  middleware.push(thunk)

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers))

  return { store }
}
