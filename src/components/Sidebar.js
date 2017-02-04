import React, {Component} from 'react'
import Search from './Search'
import Menu from './Menu'

export default class Sidebar extends Component {
    constructor() {
        super()

        this.state = {
            searchText: '',
            menuOpen: false
        }

        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.onChange = this.onChange.bind(this)
        this.toggleSidebar = this.toggleSidebar.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)

        document.addEventListener('mouseup', (e) => {
            if (e.target.closest('.sidebar') === null) {
                this.setState({searchText: '', menuOpen: false})
            }
        })
    }

    handleKeyDown(e) {
        if (e.keyCode === 27) {
            this.toggleSidebar()
        }

        if (document.activeElement.className.indexOf('search-input') === -1) {
            if (e.keyCode >= 48 && e.keyCode <= 90) {
                this.toggleSidebar()
            }
        }
    }

    onChange(e) {
        const text = e.target.value
        this.setState({ searchText: text })
    }

    toggleSidebar() {
        if (this.state.menuOpen) {
            document.querySelector('.search-input').blur()
        } else {
            document.querySelector('.search-input').focus()
        }
        this.setState({
            menuOpen: !this.state.menuOpen,
            searchText: ''
        })
    }

    render() {
        const {menuOpen, searchText} = this.state

        return (
            <div className="sidebar flex flex-row" style={{ left: menuOpen ? 0 : '-400px' }}>
                <Search onChange={this.onChange} searchText={searchText} />
                <Menu />
            </div>
        )
    }
}
