import React, { Component } from 'react'
import s from './StartTitle.module.scss'

export default class StartTitle extends Component {
  render() {
    let {onTitle, title, children} = this.props;

    return (
      <>
        <span className={s.onTitle}>
          {onTitle}
        </span>
        <h1 className={s.title}>{title[0]} <span>{title[1]} </span> {title[2]}</h1>
        <p className={s.subTitle}>
          {children}
        </p>
      </>
    )
  }
}
