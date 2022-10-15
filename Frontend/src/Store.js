import { createStore } from 'redux'
import rootReducer from './State/Reducer/index'

const store = createStore(rootReducer)

export default store;