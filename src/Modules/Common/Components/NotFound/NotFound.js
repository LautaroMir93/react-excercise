import React from 'react'
import { Row } from 'antd'
import { NotFoundWrapper } from './NotFoundStyle'

const notFoundImage = require('../../../../Assets/Images/404.jpg')

export const NotFound = () => {
  return (
    <Row>
      <NotFoundWrapper xs={24} md={24}>
        <h1>404 - Page not found</h1>
        <img src={notFoundImage} alt="Page not found" />
      </NotFoundWrapper>
    </Row>
  )
}

export default NotFound
