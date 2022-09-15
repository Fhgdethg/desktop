import React, { Component } from 'react'
import s from './BlogTitle.module.scss'

export default class BlogTitle extends Component {
  render() {
    return (
      <div className={s.blogTitle}>
        <span className={s.subtitle}>
          {this.props.subtitle}
        </span>
        <h3>
          {this.props.children}
        </h3>
      </div>
    )
  }
}
