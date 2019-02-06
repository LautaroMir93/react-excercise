import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as selectors from '../../selectors'
import * as actions from '../../actions'
import SearchFilter from './SearchFilter/SearchFilter'
import PlayerList from './PlayerList/PlayerList'

export class PlayerSearch extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    filteredPlayers: PropTypes.arrayOf(
      PropTypes.shape({
        contractUntil: PropTypes.string.isRequired,
        dateOfBirth: PropTypes.string.isRequired,
        jerseyNumber: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        nationality: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
      })
    ),
    positions: PropTypes.arrayOf(PropTypes.string),
    filters: PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.string,
      age: PropTypes.number,
    }),
    error: PropTypes.string,
    fetchPlayers: PropTypes.func,
    applyFilters: PropTypes.func,
  }

  static defaultProps = {
    isFetching: false,
    filteredPlayers: null,
    positions: [],
    filters: {
      name: null,
      position: null,
      age: null,
    },
    error: null,
    fetchPlayers: () => null,
    applyFilters: () => null,
  }

  componentDidMount = () => {
    const { fetchPlayers } = this.props
    fetchPlayers()
  }

  render() {
    const { isFetching, filteredPlayers, filters, applyFilters, error, positions } = this.props
    return (
      <div>
        <h1>Football Player Finder</h1>
        <SearchFilter
          isFetching={isFetching}
          filters={filters}
          onSearch={applyFilters}
          positions={positions}
        />
        <PlayerList players={filteredPlayers} error={error} />
      </div>
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
