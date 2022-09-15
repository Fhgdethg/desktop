import React, { Component } from 'react'
import s from './SingUp.module.scss'
import SingUpForm from './SingUpForm/SingUpForm'
import SmallTitle from './SmallTitle/SmallTitle'

export default class SingUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftWrapperContent: {
        title: 'Sign up for newsletter',
        subTitle: 'Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.'
      },
      formContent: {
        inputPlaceholder: 'Email address',
        submitValue: 'Save me'
      }
    }
  }
  render() {
    return (
      <section className={s.singUp}>
        <div className={s.container}>
          <div className={s.leftWrapper}>
            <SmallTitle title={this.state.leftWrapperContent.title}>
              {this.state.leftWrapperContent.subTitle}
            </SmallTitle>
          </div>
          <div className={s.formWrapper}>
            <SingUpForm
              placeholder={this.state.formContent.inputPlaceholder}
              submitValue={this.state.formContent.submitValue}
            />
          </div>
        </div>
      </section>
    )
  }
}
