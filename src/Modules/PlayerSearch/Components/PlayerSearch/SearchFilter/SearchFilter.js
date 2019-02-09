import React from 'react'
import PropTypes from 'prop-types'
import { Col, Form, Select, Input } from 'antd'
import { FiltersWrapper, AgeInput, SearchButton, Filter } from './SearchFilterStyle'

export const SearchFilter = props => {
  const { form, onSearch, isFetching, filters, positions } = props
  const { getFieldDecorator } = form

  const search = () => {
    onSearch(form.getFieldsValue())
  }

  return (
    <Form>
      <FiltersWrapper type="flex" justify="space-between">
        <Col xs={24} md={5}>
          <Filter>
            {getFieldDecorator('name', {
              initialValue: filters.name,
            })(<Input placeholder="name" type="text" />)}
          </Filter>
        </Col>
        <Col xs={24} md={5}>
          <Filter>
            {getFieldDecorator('position', {
              initialValue: filters.position ? filters.position : undefined,
            })(
              <Select placeholder="Position">
                {positions.map((position, i) => (
                  <Select.Option key={`position${i.toString()}`} value={position}>
                    {position}
                  </Select.Option>
                ))}
              </Select>
            )}
          </Filter>
        </Col>
        <Col xs={24} md={5}>
          <Filter>
            {getFieldDecorator('age', {
              initialValue: filters.age,
            })(<AgeInput placeholder="age" min={18} max={40} />)}
          </Filter>
        </Col>
        <Col xs={24} md={5}>
          <SearchButton onClick={search} type="primary" disabled={isFetching}>
            Search
          </SearchButton>
        </Col>
      </FiltersWrapper>
    </Form>
  )
}

SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  filters: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    age: PropTypes.number,
  }),
  positions: PropTypes.arrayOf(PropTypes.string),
}

SearchFilter.defaultProps = {
  isFetching: false,
  filters: {
    name: null,
    position: null,
    age: null,
  },
  positions: [],
}

export default Form.create()(SearchFilter)
