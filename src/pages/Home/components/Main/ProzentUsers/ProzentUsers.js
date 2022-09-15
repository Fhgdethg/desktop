import React, { Component } from 'react'
import s from './ProzentUsers.module.scss'
import speed from '../../../../../assets/icons/speed.svg'
import people from '../../../../../assets/icons/people.svg'
import ProzentComponent from './ProzentComponent/ProzentComponent'

export default class ProzentUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      generalCl: [s.wrapperLeft, s.wrapperRight],
      iconCl: [s.iconLeft, s.iconRight],
      iconLinks: [speed, people],
      sumCont: ['89%', '3123'],
      sumCl: [s.sumLeft, s.sumRight],
      subTitleCl: [s.subTitleLeft, s.subTitleRight]
    }
  }
  render() {
    return (
      <section className={s.prozentUsers}>
        <ProzentComponent
          clWr={this.state.generalCl[0]}
          clIcon={this.state.iconCl[0]}
          links={this.state.iconLinks[0]}
          contSum={this.state.sumCont[0]}
          clSum={this.state.sumCl[0]}
          clSubTitle={this.state.subTitleCl[0]}
        >
          Customers who have increased their productivity
        </ProzentComponent>
        <ProzentComponent
          clWr={this.state.generalCl[1]}
          clIcon={this.state.iconCl[1]}
          links={this.state.iconLinks[1]}
          contSum={this.state.sumCont[1]}
          clSum={this.state.sumCl[1]}
          clSubTitle={this.state.subTitleCl[1]}
        >
          Users who have used our application
        </ProzentComponent>
      </section>
    )
  }
}
