import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import postReducer from './reducers/postReducer'
import authReducer from './reducers/authReducer'

const reducer = combineReducers({
	posts: postReducer,
	auth: authReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store
