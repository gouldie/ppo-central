import React, {Component} from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      searchText,
      onChange
    } = this.props

    return (
      <div className='search'>
          <div className='search-input-container flex justify-center'>
              <input className='search-input form-control' type='text' value={searchText} onChange={onChange} />
          </div>
      </div>
    )
  }
}
