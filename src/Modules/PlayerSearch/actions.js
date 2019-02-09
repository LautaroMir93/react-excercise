import axios from 'axios'
import * as actionTypes from './actionTypes'

export const footballPlayersApi = axios.create({
  baseURL: process.env.REACT_APP_FOOTBALL_PLAYERS_API_URL,
})

export const fetchPlayersStart = () => ({ type: actionTypes.FETCH_PLAYERS_START })

export const fetchPlayersSuccess = response => ({
  type: actionTypes.FETCH_PLAYERS_SUCCESS,
  payload: { players: response.data },
})

export const fetchPlayersFail = error => ({
  type: actionTypes.FETCH_PLAYERS_FAIL,
  payload: { error },
})

export const fetchPlayers = () => async dispatch => {
  dispatch(fetchPlayersStart())
  return footballPlayersApi
    .get('players.json')
    .then(response => {
      dispatch(fetchPlayersSuccess(response))
    })
    .catch(error => {
      dispatch(fetchPlayersFail(error))
    })
}

export const applyFilters = filters => ({
  type: actionTypes.APPLY_FILTERS,
  payload: { filters },
})
