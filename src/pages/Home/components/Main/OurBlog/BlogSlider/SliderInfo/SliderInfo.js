import React, { Component } from 'react'
import s from './SliderInfo.module.scss'
import Btn from '../../../../../../../shared/Header/Inner/Btn/Btn'

export default class SliderInfo extends Component {
  render() {
    return (
      <div className={s.infos}>
        <h2 className={s.title}>
          {this.props.title}
        </h2>
        <p className={s.subTitle}>
          {this.props.children}
        </p>
        <div className={s.wrapper}>
          <Btn clBtn={s.btn}>
            {this.props.btnText}
          </Btn>
          <span className={s.bookmarks}>
            {this.props.bottomRightText}
          </span>
        </div>
      </div>
    )
  }
}
