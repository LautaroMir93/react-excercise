import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Select } from 'antd'

import SearchFilter from './SearchFilter'
import { SearchButton } from './SearchFilterStyle'

configure({ adapter: new Adapter() })

describe('<SearchFilter />', () => {
  let wrapper
  const mockPositions = ['a', 'b']

  beforeEach(() => {
    wrapper = mount(<SearchFilter onSearch={() => null} positions={mockPositions} />)
  })

  it('should call the search callback when search button is clicked', () => {
    wrapper.setProps({ onSearch: jest.fn(), isFetching: false })
    wrapper.find(SearchButton).simulate('click')
    expect(wrapper.props().onSearch).toHaveBeenCalled()
  })

  it('should not call the search callback when search button is clicked while is fetching players', () => {
    wrapper.setProps({ onSearch: jest.fn(), isFetching: true })
    wrapper.find(SearchButton).simulate('click')
    expect(wrapper.props().onSearch).not.toHaveBeenCalled()
  })

  it('should pass all the filters to tbe callback function', () => {
    const filters = { name: 'joe', position: 'goalkeeper', age: 30 }
    wrapper.setProps({ onSearch: jest.fn(), isFetching: false, filters })
    wrapper.find(SearchButton).simulate('click')
    expect(wrapper.props().onSearch).toHaveBeenLastCalledWith(filters)
  })

  it('should render all positions as select options', () => {
    expect(wrapper.find(Select).props().children).toHaveLength(2)
  })
})
