import React, { Component } from 'react'
import s from './ProzentComponent.module.scss'

export default class ProzentConmponent extends Component {
  render() {
    return (
      <div className={this.props.clWr}>
        <div className={this.props.clIcon}>
          <img src={this.props.links} alt="" />
        </div>
        <span className={this.props.clSum}>
          {this.props.contSum}
        </span>
        <span className={this.props.clSubTitle}>
          {this.props.children}
        </span>
      </div>
    )
  }
}
