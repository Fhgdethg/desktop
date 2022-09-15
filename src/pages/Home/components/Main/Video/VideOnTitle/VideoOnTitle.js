import React, { Component } from 'react'
import s from './VideoOnTitle.module.scss'

export default class VideoOnTitle extends Component {
  render() {
    return (
      <div className={`${s.onTitle} ${this.props.onTitle}`}>
        {this.props.children}
      </div>
    )
  }
}
