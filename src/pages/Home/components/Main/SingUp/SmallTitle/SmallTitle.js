import React, { Component } from 'react'
import s from './SmallTitle.module.scss'

export default class SmallTitle extends Component {
  render() {
    return (
      <>
        <h4 className={s.title}>
          {this.props.title}
        </h4>
        <p className={s.subTitle}>
          {this.props.children}
        </p>
      </>
    )
  }
}
