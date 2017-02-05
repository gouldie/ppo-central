import React, {Component} from 'react'

export default class BaseStats extends Component {
	constructor(props) {
		super(props)

		this.state = {
			stats: undefined,
			firstRender: true
		}

		this.convertBaseStat = this.convertBaseStat.bind(this)
	}

	componentDidMount() {
		const { stats } = this.props

		setTimeout((() => {
			this.setState({ stats })
		}), 100)

	}

	convertBaseStat(no) {
		const percent = Math.floor((no / 255) * 100)

		let r
		let g
		let b = 0

		if (percent < 50) {
			// red to yellow
			r = 255
			g = Math.floor(255 * percent / 50)

		} else {
			// yellow to green
			r = Math.floor(255 * ((50 - percent%50) / 50))
			g = 255
		}

		return {
			backgroundColor: `rgb(${r}, ${g}, ${b}`,
			width: (percent * 4.5).toString() + 'px',
			color: `rgb(${r}, ${g}, ${b}`
		}
	}

	render() {
		const {
			stats
		} = this.state

		const hp = stats ? this.convertBaseStat(stats.hp) : { width: '1px' }
		const attack = stats ? this.convertBaseStat(stats.attack) : { width: '0px' }
		const defense = stats ?this.convertBaseStat(stats.defense) : { width: '0px' }
		const sattack = stats ?this.convertBaseStat(stats.sattack) : { width: '0px' }
		const sdefense = stats ? this.convertBaseStat(stats.sdefense) : { width: '0px' }
		const speed = stats ?this.convertBaseStat(stats.speed) : { width: '0px' }

		return (
			<div className="base-stats-container" style={{ width: '500px' }}>

				<div className="flex flex-row">
					<div className="flex flex-row justify-between">
						<span>HP: </span>
						<span>{stats && stats.hp}</span>
					</div>
					<div style={{...hp}}>-</div>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-row justify-between">
						<span>Attack: </span>
						<span>{stats && stats.attack}</span>
					</div>
					<div style={{...attack}}>-</div>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-row justify-between">
						<span>Defense: </span>
						<span>{stats && stats.defense}</span>
					</div>
					<div style={{...defense}}>-</div>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-row justify-between">
						<span>Sp. Attack: </span>
						<span>{stats && stats.sattack}</span>
					</div>
					<div style={{...sattack}}>-</div>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-row justify-between">
						<span>Sp. Defense: </span>
						<span>{stats && stats.sdefense}</span>
					</div>
					<div style={{...sdefense}}>-</div>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-row justify-between">
						<span>Speed: </span>
						<span>{stats && stats.speed}</span>
					</div>
					<div style={{...speed}}>-</div>
				</div>

			</div>
		)
	}
}