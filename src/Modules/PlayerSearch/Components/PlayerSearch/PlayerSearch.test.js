import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils'
import { initialState } from '../../reducer'

import * as actionTypes from '../../actionTypes'
import PlayerSearch, { PlayerSearch as PlayerSearchComponent } from './PlayerSearch'
import SearchFilter from './SearchFilter/SearchFilter'
import PlayerList from './PlayerList/PlayerList'

configure({ adapter: new Adapter() })

describe('<PlayerSearch />', () => {
  const spyFetch = jest.fn()
  const spyFilters = jest.fn()
  const props = {
    isFetching: false,
    players: [],
    error: null,
    filters: null,
    filteredPlayers: [],
    fetchPlayers: spyFetch,
    applyFilters: spyFilters,
  }
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<PlayerSearchComponent {...props} />)
  })

  it('should fetch players on mount', () => {
    expect(spyFetch).toHaveBeenCalled()
  })

  it('should render the filters and the list of players', () => {
    expect(wrapper.find(SearchFilter)).toHaveLength(1)
    expect(wrapper.find(PlayerList)).toHaveLength(1)
  })

  it('should receive the right props when connected', () => {
    const store = createMockStore({ PlayerSearch: initialState })
    wrapper = mount(
      <Provider store={store}>
        <PlayerSearch />
      </Provider>
    )
    const propsFromConnect = wrapper.find(PlayerSearchComponent).props()
    expect(new Set(Object.keys(propsFromConnect))).toEqual(
      new Set([
        'isFetching',
        'filteredPlayers',
        'positions',
        'filters',
        'error',
        'fetchPlayers',
        'applyFilters',
      ])
    )
  })

  it('should call applyFilter when the SearchFilter componen executes the onSearch callback', () => {
    const { APPLY_FILTERS } = actionTypes
    const store = createMockStore({ PlayerSearch: initialState })
    wrapper = mount(
      <Provider store={store}>
        <PlayerSearch />
      </Provider>
    )
    wrapper
      .find(SearchFilter)
      .props()
      .onSearch()
    expect(store.isActionTypeDispatched(APPLY_FILTERS))
  })
})
