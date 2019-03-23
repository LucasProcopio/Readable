import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { loadingBarReducer } from 'react-redux-loading-bar'
import posts from './posts'
import categories from './categories'

export default history => combineReducers({
    categories,
    posts,
    loadingBar: loadingBarReducer,
    router: connectRouter(history),
})
