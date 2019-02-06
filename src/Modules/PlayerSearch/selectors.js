import { createSelector } from 'reselect'

export const getIsFetching = state => state.PlayerSearch.isFetching
export const getPlayers = state => state.PlayerSearch.players
export const getError = state => state.PlayerSearch.error
export const getFilters = state => state.PlayerSearch.filters

export const getFilteredPlayers = createSelector(
  [getPlayers, getFilters],
  (players, filters) =>
    players.filter(player => {
      const filteredByName = filters.name === null || player.name === filters.name
      const filteredByPosition = filters.position === null || player.position === filters.position
      const filteredByAge = filters.age === null || player.age === filters.age
      return filteredByName && filteredByPosition && filteredByAge
    })
)

export const getPositions = createSelector(
  [getPlayers],
  players => [...new Set(players.map(player => player.position))]
)
