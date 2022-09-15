import React, { Component } from 'react'
import s from './Inner.module.scss'
import logo from '../../../assets/icons/logo.svg'
import Nav from './Nav/Nav'
import Social from './Social/Social'
import Btn from './Btn/Btn'

export default class Inner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnLink: '#',
      hamburgerMenuStatus: '',
    }
  }

  hamburgerToggler = clValue => {
    this.setState({hamburgerMenuStatus: clValue})
  }

  render() {

    return (
      <div className={`container ${s.head__container}`}>
        <div className={s.wrapper}>
          <img src={logo} alt="" className={s.logo} />
          <Nav
            className={s.nav}
            clNav={s.dNav}
            hamburgerMenuStatus={this.state.hamburgerMenuStatus}
            hamburgerToggler={this.hamburgerToggler}
          />
        </div>
        <div className={s.wrapper}>
          <Social />
          <Btn btnLink={this.state.btnLink} clBtn={s.btn}>
            {'Get started'}
          </Btn>
        </div>
      </div>
    )
  }
}
