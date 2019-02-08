import { createSelector } from 'reselect'
import differenceInYears from 'date-fns/difference_in_years'

export const getIsFetching = state => state.PlayerSearch.isFetching
export const getPlayers = state => state.PlayerSearch.players
export const getError = state => state.PlayerSearch.error
export const getFilters = state => state.PlayerSearch.filters

export const getFilteredPlayers = createSelector(
  [getPlayers, getFilters],
  (players, filters) =>
    players
      .map(player => ({
        ...player,
        age: differenceInYears(new Date(), new Date(player.dateOfBirth)),
      }))
      .filter(player => {
        const filteredByName = filters.name
          ? player.name.toLowerCase().includes(filters.name.toLowerCase())
          : true
        const filteredByPosition = filters.position ? player.position === filters.position : true
        const filteredByAge = filters.age ? player.age === Number(filters.age) : true
        return filteredByName && filteredByPosition && filteredByAge
      })
)

export const getPositions = createSelector(
  [getPlayers],
  players => [...new Set(players.map(player => player.position))]
)
