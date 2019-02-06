import { combineReducers } from 'redux'
import { reducer as PlayerSearch } from './PlayerSearch/reducer'

const rootReducer = combineReducers({
  PlayerSearch,
})

export default rootReducer
