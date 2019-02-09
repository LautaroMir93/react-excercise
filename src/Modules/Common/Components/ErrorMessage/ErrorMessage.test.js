import React from 'react'
import { configure, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ErrorMessage from './ErrorMessage'

configure({ adapter: new Adapter() })

describe('<ErrorMessage />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<ErrorMessage message="some error message" />)
  })

  it('should display the error message', () => {
    expect(wrapper.text()).toContain('some error message')
  })
})
