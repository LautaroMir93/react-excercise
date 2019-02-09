import React from 'react'
import PropTypes from 'prop-types'
import { Error } from './ErrorMessageStyle'

export const ErrorMessage = props => {
  const { align, message } = props
  return (
    <Error align={align}>
      <span>{message}</span>
    </Error>
  )
}

ErrorMessage.propTypes = {
  align: PropTypes.string,
  message: PropTypes.string.isRequired,
}

ErrorMessage.defaultProps = {
  align: 'left',
}

export default ErrorMessage
