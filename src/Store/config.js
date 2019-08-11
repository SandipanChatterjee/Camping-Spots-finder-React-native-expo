import {createStore,combineReducers,applyMiddleware} from 'redux'
import filter from './reducers/filter';
import thunk from 'redux-thunk'
import locations from './reducers/locations';
import auth from './reducers/auth'

const middlewares = [thunk]

const rootReducer = combineReducers({
    auth:auth,
    filter : filter,
    locations : locations
})

const configStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    )
}

export default configStore