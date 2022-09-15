import React, { Component } from 'react'
import s from './VideoSubTitle.module.scss'

export default class VideoSubTitle extends Component {
  render() {
    return (
      <p className={`${s.subTitle} ${this.props.clName}`}>
        {this.props.children}
      </p>
    )
  }
}
