
import { combineReducers , createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
import { movieReduser } from './movieReduser'

const rootReduser = combineReducers(
    {
        movieInfo: movieReduser
    }
)

export const store = createStore(rootReduser, applyMiddleware(thunk))