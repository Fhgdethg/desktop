import React, { Component } from 'react'
import s from './Btn.module.scss'

export default class Btn extends Component {
  render() {
    return (
      <a className={`${s.btn} ${this.props.clBtn}`} href={this.props.link}>
        {
          this.props.children
        }
      </a>
    )
  }
}
