import React, { Component } from 'react'
import s from './Footer.module.scss'
import Inner from '../../../../../shared/Header/Inner/Inner'

export default class Footer extends Component {
  render() {
    return (
      <footer className={s.footer}>
        <Inner 
          footerCl={s.hamburger}
        />
        <div className={`container ${s.container}`}>
          <span className={s.private}>
            Copyright © 2018 by Random site
          </span>
        </div>
      </footer>
    )
  }
}
