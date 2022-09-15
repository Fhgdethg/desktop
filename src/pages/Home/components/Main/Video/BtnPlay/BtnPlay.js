import React, { Component } from 'react'
import s from './BtnPlay.module.scss'

export default class BtnPlay extends Component {
  render() {
    return (
      <button className={`${s.btn} ${this.props.clName}`} onClick={this.props.onClickBtn}>
        <img src={this.props.link} alt="" className={s.btn_img}/>
      </button>
    )
  }
}
