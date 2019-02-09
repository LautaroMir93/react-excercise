import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { ErrorMessage } from '../../../../Common'

export const PlayerList = props => {
  const { players, isFetching, error } = props
  const columns = [
    {
      title: 'Player',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
  ]
  if (error) return <ErrorMessage align="center" message="Something went wrong fetching players" />
  return <Table rowKey="name" dataSource={players} loading={isFetching} columns={columns} />
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      nationality: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ),
  isFetching: PropTypes.bool.isRequired,
}

PlayerList.defaultProps = {
  players: [],
}

export default PlayerList
