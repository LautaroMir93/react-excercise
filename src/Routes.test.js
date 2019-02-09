import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils'
import { MemoryRouter } from 'react-router-dom'

import Routes from './Routes'
import { initialState } from './Modules/PlayerSearch/reducer'
import { PlayerSearch } from './Modules/PlayerSearch'
import { NotFound } from './Modules/Common'

configure({ adapter: new Adapter() })

describe('<Routes>', () => {
  const store = createMockStore({ PlayerSearch: initialState })

  const mountWithRoute = route =>
    mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <Routes />
        </MemoryRouter>
      </Provider>
    )

  it('should render PlayerSearch when route is /', () => {
    const wrapper = mountWithRoute('/')
    expect(wrapper.find(PlayerSearch)).toHaveLength(1)
  })

  it('should render 404 page when route is invalid', () => {
    const wrapper = mountWithRoute('/invalid')
    expect(wrapper.find(NotFound)).toHaveLength(1)
  })
})
