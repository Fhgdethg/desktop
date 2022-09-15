import React, { Component } from 'react'
import s from './Nav.module.scss'
import hamburger from '../../../../assets/icons/hamburger.svg'
import './Nav.scss'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        'Home',
        'Blog',
        'Features',
        'Pricing',
        'Documentation'
      ],
      hamburgerIndexClass: ''
    }
  }
  hamburgerTogglerChange = e => {
    if (this.props.hamburgerMenuStatus === '') {
      this.props.hamburgerToggler(s.hamburgerCl)
      this.setState({hamburgerIndexClass: s.hamburgerIndexClass})
      e.target.style.zIndex = 1200
    }
    else if (this.props.hamburgerMenuStatus === s.hamburgerCl) {
      this.props.hamburgerToggler(s.hamburgerClNoneSee)
      this.setState({hamburgerIndexClass: ''})
      e.target.style.zIndex = 0
    }
    else if (this.props.hamburgerMenuStatus === s.hamburgerClNoneSee) {
      this.props.hamburgerToggler(s.hamburgerCl)
      this.setState({hamburgerIndexClass: s.hamburgerIndexClass})
      e.target.style.zIndex = 1200
    }
  }

  render() {
    return (
      <nav className={s.nav}>
        <img
          src={hamburger}
          alt="Menu"
          className={`${s.hamburger} ${this.state.hamburgerIndexClass}`}
          onClick={this.hamburgerTogglerChange}
        />
        <ul
          className={`navigation ${this.props.hamburgerMenuStatus}`}>
          {
            this.state.navItems.map((item, index) =>
              <li
                className={s.navigation__item}
                key={index}>
                {item}
              </li>)
          }
        </ul>
      </nav>
    )
  }
}
