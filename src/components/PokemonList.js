import React, {Component} from 'react'
import { Link } from 'react-router'


const data = require('../../assets/json/pokemon.json')

export default class PokemonList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ padding: '30px 0 0 150px' }}>
        <h2>
          Pokemon
        </h2>
        <div className='pokemon-list' style={{ width: '800px' }}>
        {
          data.map((p, i) => {
            return (
              <div className='pokemon-list-item flex flex-row' style={{ marginBottom: '5px', padding: '10px' }} key={i}>
                <div style={{ width: '200px' }}>
                  <Link to={`/pokemon/${p.name.toLowerCase()}`}>{p.name}</Link>
                </div>
                <div style={{ width: '200px' }}>
                  <a href='#'>{p.type[0]}</a>
                  {
                    p.type.length > 1 &&
                    <span>/<a href='#'>{p.type[1]}</a></span>
                  }
                </div>
                <div style={{ width: '200px' }}>
                  {p.rarity}
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}
