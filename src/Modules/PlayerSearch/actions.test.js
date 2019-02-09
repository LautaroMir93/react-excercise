import * as actions from './actions'
import * as actionTypes from './actionTypes'

describe('[PlayerSearch] action creators', () => {
  const mockPlayers = [
    { name: 'a', position: 'b', dateOfBirth: '2000-01-01' },
    { name: 'b', position: 'b', dateOfBirth: '2000-01-01' },
    { name: 'c', position: 'c', dateOfBirth: '2000-01-01' },
  ]

  describe('fetchPlayersStart', () => {
    it('should return the right action', () => {
      const { fetchPlayersStart } = actions
      const { FETCH_PLAYERS_START } = actionTypes
      expect(fetchPlayersStart()).toEqual({
        type: FETCH_PLAYERS_START,
      })
    })
  })

  describe('fetchPlayersSuccess', () => {
    it('should return the right action', () => {
      const { fetchPlayersSuccess } = actions
      const { FETCH_PLAYERS_SUCCESS } = actionTypes
      const apiResponse = {
        data: mockPlayers,
      }
      expect(fetchPlayersSuccess(apiResponse)).toEqual({
        type: FETCH_PLAYERS_SUCCESS,
        payload: { players: mockPlayers },
      })
    })
  })

  describe('fetchPlayersFail', () => {
    it('should return the right action', () => {
      const { fetchPlayersFail } = actions
      const { FETCH_PLAYERS_FAIL } = actionTypes
      const error = 'some error'
      expect(fetchPlayersFail(error)).toEqual({
        type: FETCH_PLAYERS_FAIL,
        payload: { error },
      })
    })
  })

  describe('fetchPlayersFail', () => {
    it('should return the right action', () => {
      const { fetchPlayersFail } = actions
      const { FETCH_PLAYERS_FAIL } = actionTypes
      const error = 'some error'
      expect(fetchPlayersFail(error)).toEqual({
        type: FETCH_PLAYERS_FAIL,
        payload: { error },
      })
    })
  })

  describe('fetchPlayersStart', () => {
    it('should call FETCH_PLAYERS_START and FETCH_PLAYERS_SUCCESS after calling the API successfully', async done => {
      const { fetchPlayers } = actions
      const { FETCH_PLAYERS_START, FETCH_PLAYERS_SUCCESS } = actionTypes
      const dispatchedActions = []
      const dispatch = jest.fn(action => dispatchedActions.push(action))
      const getState = jest.fn()
      const response = {
        data: mockPlayers,
      }

      actions.footballPlayersApi.get = () =>
        new Promise(resolve => {
          resolve(response)
        })

      await fetchPlayers()(dispatch, getState)
      expect(dispatchedActions).toContainEqual({ type: FETCH_PLAYERS_START })
      expect(dispatchedActions).toContainEqual({
        type: FETCH_PLAYERS_SUCCESS,
        payload: { players: mockPlayers },
      })
      done()
    })

    it('should call FETCH_PLAYERS_START and FETCH_PLAYERS_FAIL after calling the API and failing', async done => {
      const { fetchPlayers } = actions
      const { FETCH_PLAYERS_START, FETCH_PLAYERS_FAIL } = actionTypes
      const dispatchedActions = []
      const dispatch = jest.fn(action => dispatchedActions.push(action))
      const getState = jest.fn()
      const error = { message: 'some error' }
      const response = error

      actions.footballPlayersApi.get = () =>
        new Promise((resolve, reject) => {
          reject(response)
        })

      await fetchPlayers()(dispatch, getState)
      expect(dispatchedActions).toContainEqual({ type: FETCH_PLAYERS_START })
      expect(dispatchedActions).toContainEqual({
        type: FETCH_PLAYERS_FAIL,
        payload: { error },
      })
      done()
    })
  })

  describe('applyFilters', () => {
    it('should return the right action', () => {
      const { applyFilters } = actions
      const { APPLY_FILTERS } = actionTypes
      const filters = { name: 'c', position: 'c', age: 30 }
      expect(applyFilters(filters)).toEqual({
        type: APPLY_FILTERS,
        payload: { filters },
      })
    })
  })
})
