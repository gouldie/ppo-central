import React, {Component} from 'react'
import { mapNameToImg } from '../utils/utils'

const data = require('../../assets/json/pokemon.json')

export default class Pokemon extends Component {
  constructor(props) {
    super(props)

    const match = data.find((e) => {
      return e.name.toLowerCase() === this.props.params.pokemon.toLowerCase()
    })

    this.state = { match, selectedLocation: match.location[0] }

    this.updateSelectedLocation = this.updateSelectedLocation.bind(this)
  }

  updateSelectedLocation(mapName) {
    this.setState({ selectedLocation: mapName })
  }

  render() {
    const {
      selectedLocation,
      match
    } = this.state

    const renderLocations = match.location.map((loc, i) => {
      return (
        <span key={i}>
          <span
            className={loc === this.state.selectedLocation ? 'active' : ''}
            onClick={() => {
              this.updateSelectedLocation(loc)
            }}
          >
            {loc}
          </span>
          { match.location.length > i + 1 && ', '}
        </span>
      )
    })

    const locationImgName = mapNameToImg(selectedLocation)
    const locationImgPath = `../../assets/imgs/maps/${locationImgName}`

    return (
      <div style={{ padding: '30px 0 0 150px' }}>
        <h2>{match.name}</h2>
        <h4 className='pokemon-locations'>
          Found in Maps: {renderLocations}
        </h4>
        <div className='pokemon-map'>
          <img src={locationImgPath} />
        </div>
      </div>
    )
  }
}
