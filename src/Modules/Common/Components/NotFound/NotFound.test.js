import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NotFound from './NotFound'

configure({ adapter: new Adapter() })

describe('<NotFound />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NotFound />)
  })

  it('should display the error message', () => {
    const { src } = wrapper.find('img').props()
    expect(src).not.toBeUndefined()
    expect(src).not.toBeNull()
  })
})
