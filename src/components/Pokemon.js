import React, {Component} from 'react'
import { pokemonNameToMainImg } from '../utils/utils'

const data = require('../../assets/json/pokemon.json')

export default class Pokemon extends Component {
  constructor(props) {
    super(props)

    const match = data.find((e) => {
      return e.name.toLowerCase() === this.props.params.pokemon.toLowerCase()
    })

    this.state = { match }
  }

  render() {
    const { match } = this.state
    const imgMain = `../../assets/imgs/pokemon-main/${pokemonNameToMainImg(match.name)}`

    return (
      <div style={{ padding: '30px 0 0 150px' }}>
        <h2>{match.name}</h2>

        <div className='flex flex-row justify-between' style={{ width: '600px' }}>
          <div style={{ width: '450px' }}>
            <p>
              {match.name} is a <a href='#'> {match.type[0]}</a>
              {
                match.type.length > 1 &&
                <span>/<a href='#'>{match.type[1]}</a></span>
              }
              <span> type Pokémon.</span>
            </p>
            <p dangerouslySetInnerHTML={{ __html: match.evoHtml }}></p>
          </div>
          <div>
            <img src={imgMain} style={{ width: '150px' }} />
          </div>
        </div>
      </div>
    )
  }
}
