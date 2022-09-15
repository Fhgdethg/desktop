import React, { Component } from 'react'
import s from './AppInfo.module.scss'
import VideoSubTitle from '../../Video/VideoSubTitle/VideoSubTitle'

export default class AppInfo extends Component {
  render() {
    return (
      <div className={s.info}>
        <div className={s.icon}>
          <img src={this.props.icon} alt="" />
        </div>
        <span className={s.onTitle}>
          {this.props.onTitle}
        </span>
        <VideoSubTitle clName={s.subTitle}>
          {this.props.text}
        </VideoSubTitle>
      </div>
    )
  }
}
