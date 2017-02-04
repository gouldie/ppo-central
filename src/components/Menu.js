import React, {Component} from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='menu flex flex-column'>
        <div className='logo-container flex flex-column align-items-center' style={{ marginTop: '10px' }}>
          <Link to={'/'}>
            <img src='../../assets/imgs/logo.png' style={{ width: '70px' }} />
          </Link>
          <p>temp logo</p>
        </div>
        <div className='menu-item-container flex flex-column align-items-center' style={{ marginTop: '50px' }}>
          <Link to={'/pokemon'}>
            <img src='../../assets/imgs/pokeball.png' style={{ width: '70px' }} />
          </Link>
          <p>POKEMON</p>
        </div>
        <div className='menu-item-container flex flex-column align-items-center'>
          <img src='../../assets/imgs/potion.png' style={{ width: '70px' }} />
          <p>ITEMS</p>
        </div>
      </div>
    )
  }
}
