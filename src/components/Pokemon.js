import React, {Component} from 'react'
import { Link } from 'react-router'
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

  componentWillReceiveProps(nextProps) {
    if (this.props.params.pokemon !== nextProps.params.pokemon) {
      const match = data.find((e) => {
        return e.name.toLowerCase() === nextProps.params.pokemon.toLowerCase()
      })
      this.setState({ match })
    }
  }

  render() {
    const { match } = this.state
    const imgMain = `../../assets/imgs/pokemon-main/${pokemonNameToMainImg(match.name)}`

    return (
      <div style={{ padding: '30px 0 0 150px' }}>
        <h2>{match.name}</h2>

        <div className='flex flex-row justify-between' style={{ width: '600px' }}>
          <div style={{ width: '450px', marginRight: '30px' }}>
            <p>
              {match.name} is a <Link to={'#'}> {match.type[0]}</Link>
              {
                match.type.length > 1 &&
                <span>/<Link to={'#'}>{match.type[1]}</Link></span>
              }
              <span> type Pokémon.</span>
            </p>
            <p>
              {
                match.evo.map((e) => {
                  if (e.type === 'text') {
                    return e.content
                  }
                  return <Link to={e.link}>{e.content}</Link>
                })
              }
            </p>
          </div>
          <div>
            <img src={imgMain} style={{ width: '150px' }} />
          </div>
        </div>
      </div>
    )
  }
}
