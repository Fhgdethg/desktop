import React, { Component } from 'react'
import BlogSlider from './BlogSlider/BlogSlider'
import BlogTitle from './BlogTitle/BlogTitle'
import s from './OurBlog.module.scss'

export default class OurBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogTitle: {
        subTitle: 'OUR RESOURCES',
        title: 'Start reading our blog'
      }
    }
  }
  render() {
    return (
      <section className={s.ourBlog}>
        <div className={s.container}>
          <BlogTitle subtitle={this.state.blogTitle.subTitle}>
            {this.state.blogTitle.title}
          </BlogTitle>
          <BlogSlider />
        </div>

      </section>
    )
  }
}
