import React, { Component } from 'react'
import s from './Social.module.scss'
import face from '../../../../assets/icons/facebook_head.svg'
import tel from '../../../../assets/icons/tel_head.svg'
import fly from '../../../../assets/icons/fly_head.svg'
import m from '../../../../assets/icons/m_head.svg'

export default class Social extends Component {
  render() {

    let socialIcons = [
      [face, 'google.com', 'facebook'],
      [tel, 'google.com', 'telephone'],
      [fly, 'google.com', 'fly'],
      [m, 'google.com', 'M']
    ]

    return (
      <ul className={s.social}>
        {
          socialIcons.map((item, index) =>
          <li className={s.social__item} key={index}>
            <a href={item[1]}>
              {
                <img src={item[0]} alt="" aria-label={item[2]}/>
              }
            </a>
          </li>
          )
        }
      </ul>
    )
  }
}
