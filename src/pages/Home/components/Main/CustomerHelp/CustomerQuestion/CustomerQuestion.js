import React, { Component } from 'react'
import Btn from '../../../../../../shared/Header/Inner/Btn/Btn'
import s from './CustomerQuestion.module.scss'

export default class CustomerQuestion extends Component {
  render() {
    return (
      <div className={s.question}>
        <div className={s.seeElements}>
          <img
            src={this.props.iconLink}
            alt=""
            onClick={this.props.onClickForShare}
          />
          <span className={s.questionText}>
            {this.props.questionText}
          </span>
        </div>
        <div className={`${s.noneSeeElements} ${this.props.openElementsClass}`}>
          <p className={s.answer}>
            {this.props.children}
          </p>
          <Btn
            link={this.props.openBtnLink}
            clBtn={s.btn}
          >
            {this.props.openBtnText}
          </Btn>
        </div>
      </div>
    )
  }
}
