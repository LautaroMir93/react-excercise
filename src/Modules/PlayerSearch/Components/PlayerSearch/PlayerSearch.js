import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import * as selectors from '../../selectors'
import * as actions from '../../actions'
import SearchFilter from './SearchFilter/SearchFilter'
import PlayerList from './PlayerList/PlayerList'

export class PlayerSearch extends Component {
  componentDidMount = () => {
    const { fetchPlayers } = this.props
    fetchPlayers()
  }

  render() {
    const { isFetching, filteredPlayers, filters, applyFilters, error, positions } = this.props
    return (
      <Row type="flex" justify="center">
        <Col xs={22} md={22}>
          <h1 style={{ marginTop: '50px' }}>Football Player Finder</h1>
          <SearchFilter
            isFetching={isFetching}
            filters={filters}
            onSearch={applyFilters}
            positions={positions}
          />
          <PlayerList players={filteredPlayers} isFetching={isFetching} error={error} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: selectors.getIsFetching(state),
  filteredPlayers: selectors.getFilteredPlayers(state),
  positions: selectors.getPositions(state),
  filters: selectors.getFilters(state),
  error: selectors.getError(state),
})

const mapDispatchToProps = dispatch => ({
  fetchPlayers: () => dispatch(actions.fetchPlayers()),
  applyFilters: filters => dispatch(actions.applyFilters(filters)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSearch)
