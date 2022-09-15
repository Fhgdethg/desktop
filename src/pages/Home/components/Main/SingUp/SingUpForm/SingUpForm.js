import React, { Component } from 'react'
import s from './SingUpForm.module.scss'

export default class SingUpForm extends Component {
  render() {
    return (
      <form className={s.form}>
        <input
          type="text"
          placeholder={this.props.placeholder}
          className={s.emailInput}
        />
        <input
          type="submit"
          value={this.props.submitValue}
          className={s.submit}
        />
      </form>
    )
  }
}
