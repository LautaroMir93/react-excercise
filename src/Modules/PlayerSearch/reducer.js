import * as actionTypes from './actionTypes'

export const initialState = {
  isFetching: false,
  players: [],
  error: null,
  filters: {
    name: null,
    position: null,
    age: null,
  },
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLAYERS_START:
      return {
        ...state,
        isFetching: true,
      }
    case actionTypes.FETCH_PLAYERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        players: action.payload.players,
      }
    case actionTypes.FETCH_PLAYERS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      }
    case actionTypes.APPLY_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload.filters,
        },
      }
    default:
      return state
  }
}
