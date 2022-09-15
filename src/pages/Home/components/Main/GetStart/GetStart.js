import React, { Component } from 'react'
import Btn from '../../../../../shared/Header/Inner/Btn/Btn'
import s from './GetStart.module.scss'
import StartTitle from './StartTitle/StartTitle'

export default class GetStart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleInfo: {
        onTitle: 'PLAN YOUR LIFE',
        title: ['Get', 'started', 'now'],
        subTitle: 'Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.'
      },
      btnInfo: [
        {
          link: '#',
          content: 'View pricing'
        },
        {
          link: '#',
          content: 'Read documentation'
        },
      ]
    }
  }
  render() {
    return (
      <section className={s.getStart}>
        <div className={s.container}>
          <StartTitle
            onTitle={this.state.titleInfo.onTitle}
            title={this.state.titleInfo.title}>
            {this.state.titleInfo.subTitle}
          </StartTitle>
          <div className={s.btnWrapper}>
            <Btn clBtn={s.btnLeft} link={this.state.btnInfo[0].link}>
              {this.state.btnInfo[0].content}
            </Btn>
            <Btn clBtn={s.btnRight} link={this.state.btnInfo[1].link}>
              {this.state.btnInfo[1].content}
            </Btn>
          </div>
        </div>
      </section>
    )
  }
}
