import * as selectors from './selectors'

describe('[PlayerSearch] selectors', () => {
  const mockPlayers = [
    { name: 'a', position: 'a', dateOfBirth: '2000-01-01' },
    { name: 'b', position: 'b', dateOfBirth: '1999-01-01' },
    { name: 'c', position: 'b', dateOfBirth: '1989-01-01' },
  ]
  const mockStore = {
    PlayerSearch: {
      isFetching: false,
      error: null,
      players: mockPlayers,
      filters: {
        name: 'c',
        position: 'b',
        age: 30,
      },
    },
  }

  describe('getIsFetching', () => {
    it('should return the isFetching value from store', () => {
      const { getIsFetching } = selectors
      expect(getIsFetching(mockStore)).toBe(false)
    })
  })

  describe('getPlayers', () => {
    it('should return the isFetching value from store', () => {
      const { getPlayers } = selectors
      expect(getPlayers(mockStore)).toEqual(mockStore.PlayerSearch.players)
    })
  })

  describe('getError', () => {
    it('should return the error value from store', () => {
      const { getError } = selectors
      expect(getError(mockStore)).toBeNull()
    })
  })

  describe('getFilters', () => {
    it('should return the error value from store', () => {
      const { getFilters } = selectors
      expect(getFilters(mockStore)).toEqual(mockStore.PlayerSearch.filters)
    })
  })

  describe('getFilteredPlayers', () => {
    it('should return the players with the filter applied and also the age calculated', () => {
      const { getFilteredPlayers } = selectors
      expect(getFilteredPlayers(mockStore)).toEqual([
        { name: 'c', position: 'b', dateOfBirth: '1989-01-01', age: 30 },
      ])
    })
    it('should work filtering only by name', () => {
      const { getFilteredPlayers } = selectors
      const mock = { PlayerSearch: { players: mockPlayers, filters: { name: 'a' } } }
      expect(getFilteredPlayers(mock)).toEqual([
        { name: 'a', position: 'a', dateOfBirth: '2000-01-01', age: 19 },
      ])
    })
    it('should work filtering only by position', () => {
      const { getFilteredPlayers } = selectors
      const mock = { PlayerSearch: { players: mockPlayers, filters: { position: 'b' } } }
      expect(getFilteredPlayers(mock)).toEqual([
        { name: 'b', position: 'b', dateOfBirth: '1999-01-01', age: 20 },
        { name: 'c', position: 'b', dateOfBirth: '1989-01-01', age: 30 },
      ])
    })
    it('should work filtering only by age', () => {
      const { getFilteredPlayers } = selectors
      const mock = { PlayerSearch: { players: mockPlayers, filters: { age: '30' } } }
      expect(getFilteredPlayers(mock)).toEqual([
        { name: 'c', position: 'b', dateOfBirth: '1989-01-01', age: 30 },
      ])
    })
  })

  describe('getPositions', () => {
    it('should the all the positions without repeating', () => {
      const { getPositions } = selectors
      expect(getPositions(mockStore)).toEqual(['a', 'b'])
    })
  })
})
