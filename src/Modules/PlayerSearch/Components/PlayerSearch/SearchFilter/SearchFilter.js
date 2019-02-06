import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row, Form, Select, Input, Button } from 'antd'

export const SearchFilter = props => {
  const { form, onSearch, isFetching, filters, positions } = props
  const { getFieldDecorator } = form

  const search = e => {
    e.preventDefault()
    onSearch(form.getFieldsValue())
  }

  return (
    <Form onSubmit={search}>
      <Row>
        <Col xs={24} sm={12} md={6}>
          <Form.Item>
            {getFieldDecorator('name', {
              initialValue: filters.name,
            })(<Input placeholder="name" type="text" />)}
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Form.Item>
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
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Form.Item>
            {getFieldDecorator('age', {
              initialValue: filters.age,
            })(<Input placeholder="age" type="number" />)}
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Button type="primary" htmlType="submit" disabled={isFetching}>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  filters: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    age: PropTypes.string,
  }),
  positions: PropTypes.arrayOf(PropTypes.string),
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
  }),
}

SearchFilter.defaultProps = {
  form: null,
  isFetching: false,
  filters: {
    name: null,
    position: null,
    age: null,
  },
  positions: [],
}

export default Form.create()(SearchFilter)
