import { combineReducers } from 'redux'
import { reducer as PlayerSearch } from './PlayerSearch'

const rootReducer = combineReducers({
  PlayerSearch,
})

export default rootReducer
