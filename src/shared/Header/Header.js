import React, { Component } from 'react'
import s from './Header.module.scss'
import Inner from './Inner/Inner'

export default class Header extends Component {
  render() {

    return (
      <header className={s.head}>
        <Inner/>
      </header>
    )
  }
}
