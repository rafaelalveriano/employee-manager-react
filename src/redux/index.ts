import { createStore, applyMiddleware } from 'redux'
import createSagaMid from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const sagaMid = createSagaMid()

const mids = [sagaMid]

const store = createStore(reducers, applyMiddleware(...mids))

sagaMid.run(sagas)
export default store
