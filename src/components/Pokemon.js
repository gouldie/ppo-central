import React, {Component} from 'react'
import { Link } from 'react-router'
import { pokemonNameToMainImg } from '../utils/utils'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const data = require('../../assets/json/pokemon.json')

export default class Pokemon extends Component {
  constructor(props) {
    super(props)

    const match = data.find((e) => {
      return e.name.toLowerCase() === this.props.params.pokemon.toLowerCase()
    })

    this.state = { match }

    this.handleTabSelect = this.handleTabSelect.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.pokemon !== nextProps.params.pokemon) {
      const match = data.find((e) => {
        return e.name.toLowerCase() === nextProps.params.pokemon.toLowerCase()
      })
      this.setState({ match })
    }
  }

  handleTabSelect(index, last) {
      console.log('Selected tab: ' + index + ', Last tab: ' + last);
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
                match.evo.map((e, i) => {
                  if (e.type === 'text') {
                    return e.content
                  }
                  return <Link key={i} to={e.link}>{e.content}</Link>
                })
              }
            </p>
            <p>
              Defeating a wild {match.name} grants {match.ev[0].amount} {match.ev[0].type} {match.ev[1] &&
              'and ' + match.ev[1].amount + ' ' + match.ev[1].type} EV{match.ev[0].amount > 1 || match.ev[1] ? 's' : ''}.
            </p>
          </div>
          <div>
            <img src={imgMain} style={{ width: '150px' }} />
          </div>
        </div>

        <Tabs
            onSelect={this.handleTabSelect}
            selectedIndex={0}
            style={{ width: '600px' }}
        >
          <TabList>
            <Tab>Locations</Tab>
            <Tab>...</Tab>
            <Tab>...</Tab>
          </TabList>

          <TabPanel>
            {
              match.location.length > 0 ?
                <table className='pokemon-table' style={{ width: '100%' }}>
                  <tbody>
                  {
                    match.location.map((e, i) => {
                      return (
                        <tr key={i}>
                          <td>{e.name}</td>
                          <td>{e.region}</td>
                          <td>{e.rarity}</td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
                :
                <h2>This Pokémon cannot be found in the wild.</h2>
            }
          </TabPanel>

          <TabPanel>
            <h2>More to come</h2>
          </TabPanel>
          <TabPanel>
            <h2>More to come</h2>
          </TabPanel>
        </Tabs>

      </div>
    )
  }
}
