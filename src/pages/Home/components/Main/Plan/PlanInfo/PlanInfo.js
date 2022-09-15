import React, { Component } from 'react'
import s from './PlanInfo.module.scss'
import VideoOnTitle from '../../Video/VideOnTitle/VideoOnTitle'
import VideoSubTitle from '../../Video/VideoSubTitle/VideoSubTitle'
import Btn from '../../../../../../shared/Header/Inner/Btn/Btn'
import rectangle from '../../../../../../assets/icons/rectangleWhite.svg'

export default class PlanInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleText: [
        'Plan',
        'and',
        'manage'
      ]
    }
  }
  render() {
    return (
      <div className={s.info}>
        <VideoOnTitle>
          DESKTOP AND MOBILE APP
        </VideoOnTitle>
        <h2 className={s.title}>
          <span className={s.title_bold}>{this.state.titleText[0]} </span>
          {this.state.titleText[1]} <span className={s.title_bold}>{this.state.titleText[2]}</span>
        </h2>
        <VideoSubTitle clName={s.subTitle}>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.
        </VideoSubTitle>
        <div className={s.btns}>
          <Btn clBtn={s.btnBlue}>
            View video
            <img src={rectangle} alt="" className={s.btn__img} />
          </Btn>
          <Btn clBtn={s.btnGray}>
            See features
          </Btn>
        </div>
      </div>
    )
  }
}
