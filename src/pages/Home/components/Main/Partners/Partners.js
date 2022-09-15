import React, { Component } from 'react'
import s from './Partners.module.scss'
import bitBucket from '../../../../../assets/partners/bitbucket.svg'
import appleWatch from '../../../../../assets/partners/apple-watch.svg'
import facebook from '../../../../../assets/partners/facebook.svg'
import atlassiant from '../../../../../assets/partners/atlassian.svg'
import audi from '../../../../../assets/partners/audi.svg'


export default class Partners extends Component {
  constructor(props) {
    super(props)
    this.state = {
      partnersIcons: [
        bitBucket,
        appleWatch,
        facebook,
        atlassiant,
        audi
      ]
    }
  }
  render() {
    return (
      <section className={s.partners}>
        <div className={s.wrapper}>
          {
            this.state.partnersIcons.map((item, index) => <img src={item} alt="" key={index} className={s.partner}/>)
          }
        </div>
      </section>
    )
  }
}
