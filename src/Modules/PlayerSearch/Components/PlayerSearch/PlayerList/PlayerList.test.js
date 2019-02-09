import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Table } from 'antd'

import PlayerList from './PlayerList'
import { ErrorMessage } from '../../../../Common'

configure({ adapter: new Adapter() })

describe('<SearchFilter />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<PlayerList isFetching={false} />)
  })

  it('should not render a table if there was an error but an error instead', () => {
    wrapper.setProps({ error: { message: 'some error' } })
    expect(wrapper.find(ErrorMessage)).toHaveLength(1)
    expect(wrapper.find(Table)).toHaveLength(0)
  })

  it('should render a table if there are no errors', () => {
    expect(wrapper.find(ErrorMessage)).toHaveLength(0)
    expect(wrapper.find(Table)).toHaveLength(1)
  })
})
