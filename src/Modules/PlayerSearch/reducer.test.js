import { Agent } from 'http'
import { initialState, reducer } from './reducer'
import * as actions from './actions'

describe('[PlayerSearch] reducer)', () => {
  it('should initialize with specified initial state', () => {
    expect(reducer(undefined, { type: null })).toEqual(initialState)
  })

  it('should set isFetching when FETCH_PLAYERS_START action is passed', () => {
    const { fetchPlayersStart } = actions
    expect(reducer(undefined, fetchPlayersStart())).toEqual({
      ...initialState,
      isFetching: true,
    })
  })

  it('should set isFetching with false and save the players when FETCH_PLAYERS_SUCCESS is passed', () => {
    const { fetchPlayersSuccess } = actions
    const players = [
      { name: 'a', position: 'b', dateOfBirth: '2000-01-01' },
      { name: 'b', position: 'b', dateOfBirth: '2000-01-01' },
      { name: 'c', position: 'c', dateOfBirth: '2000-01-01' },
    ]
    const response = {
      data: players,
    }
    expect(reducer(undefined, fetchPlayersSuccess(response))).toEqual({
      ...initialState,
      isFetching: false,
      players,
    })
  })

  it('should set isFetching with false and save the error when FETCH_PLAYERS_FAIL is passed', () => {
    const { fetchPlayersFail } = actions
    const error = 'some error'
    expect(reducer(undefined, fetchPlayersFail(error))).toEqual({
      ...initialState,
      isFetching: false,
      error,
    })
  })

  it('should set isFetching with false and save the error when FETCH_PLAYERS_FAIL is passed', () => {
    const { fetchPlayersFail } = actions
    const error = 'some error'
    expect(reducer(undefined, fetchPlayersFail(error))).toEqual({
      ...initialState,
      isFetching: false,
      error,
    })
  })

  it('should set the filters when APPLY_FILTERS is passed', () => {
    const { applyFilters } = actions
    const filters = {
      name: 'a',
      position: 'a',
      age: 0,
    }
    expect(reducer(undefined, applyFilters(filters))).toEqual({
      ...initialState,
      filters,
    })
  })
})
