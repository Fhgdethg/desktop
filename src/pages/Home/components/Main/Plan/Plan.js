import React, { Component } from 'react'
import s from './Plan.module.scss'
import desktop from '../../../../../assets/illustrations/desktop.svg'
import PlanInfo from './PlanInfo/PlanInfo'


export default class Plan extends Component {
  render() {
    return (
      <section className={s.plan}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <PlanInfo />
            <img src={desktop} alt="Desktop" className={s.desktop}/>
          </div>
        </div>
      </section>
    )
  }
}
