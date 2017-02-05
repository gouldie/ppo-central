import React, {Component} from 'react'

export default class BaseStats extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			abilities
		} = this.props


		return (
			<div className="abilities-container flex flex-column" style={{ width: '150px', textAlign: 'center' }}>
				{
					abilities && abilities.map((a, i) => {
						return <div key={i} style={{ marginTop: '5px' }}>{a}</div>
					})
				}
			</div>
		)
	}
}