import React, { Component } from 'react'
import BlogTitle from '../OurBlog/BlogTitle/BlogTitle'
import s from './CustomerHelp.module.scss'
import openMenu from '../../../../../assets/icons/openMenu.svg'
import clouseMenu from '../../../../../assets/icons/clouseMenu.svg'
import CustomerQuestion from './CustomerQuestion/CustomerQuestion'

export default class CustomerHelp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogTitle: {
        subTitle: 'CUSTOMER HELP',
        title: 'Frequently asked questions'
      },
      menu: {
        menuItems: [
          {
            statusIcon: openMenu,
            questionText: 'Reque insolens in vel?',
            openElementsClass: '',
            openText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
            openBtnText: 'Go to documentation',
            openBtnLink: '#'
          },
          {
            statusIcon: openMenu,
            questionText: 'Vis rebum error graecis ea, id sit postea accusamus?',
            openElementsClass: '',
            openText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
            openBtnText: 'Go to documentation',
            openBtnLink: '#'
          },
          {
            statusIcon: clouseMenu,
            questionText: 'Lorem repudiandae ne nec?',
            openElementsClass: s.displayOpenElementsClass,
            openText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
            openBtnText: 'Go to documentation',
            openBtnLink: '#'
          },
          {
            statusIcon: openMenu,
            questionText: 'Ad dicit numquam vel. Et eos iudico feugait percipitur?',
            openElementsClass: '',
            openText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
            openBtnText: 'Go to documentation',
            openBtnLink: '#'
          },
          {
            statusIcon: openMenu,
            questionText: 'Sea no dico percipitur. Fierent constituam definitiones id eum?',
            openElementsClass: '',
            openText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
            openBtnText: 'Go to documentation',
            openBtnLink: '#'
          },
        ]
      }
    }
  }

  shareText = (index) => {
    let answer = this.state.menu.menuItems[index].openElementsClass
    if (answer == s.openElementsClass || answer == '') {
      this.setState({ [this.state.menu.menuItems[index].openElementsClass]: s.displayOpenElementsClass })
      this.state.menu.menuItems[index].openElementsClass = s.displayOpenElementsClass
      this.setState({[this.state.menu.menuItems[index].statusIcon]: clouseMenu})
      this.state.menu.menuItems[index].statusIcon = clouseMenu
    }
    else if (answer == s.displayOpenElementsClass) {
      this.setState({ [this.state.menu.menuItems[index].openElementsClass]: s.openElementsClass })
      this.state.menu.menuItems[index].openElementsClass = s.openElementsClass
      this.setState({[this.state.menu.menuItems[index].statusIcon]: openMenu})
      this.state.menu.menuItems[index].statusIcon = openMenu
    }
  }

  render() {
    return (
      <section className={s.customerHelp}>
        <div className={s.container}>
          <BlogTitle subtitle={this.state.blogTitle.subTitle}>
            {this.state.blogTitle.title}
          </BlogTitle>
          <div className={s.menu}>
            {
              this.state.menu.menuItems.map((item, index) =>
                <CustomerQuestion
                  iconLink={this.state.menu.menuItems[index].statusIcon}
                  questionText={item.questionText}
                  openElementsClass={item.openElementsClass}
                  openBtnText={item.openBtnText}
                  openBtnLink={item.openBtnLink}
                  onClickForShare={this.shareText.bind(this, index)}
                  key={item.questionText}
                >
                  {item.openText}
                </CustomerQuestion>)
            }
          </div>
        </div>
      </section>
    )
  }
}
