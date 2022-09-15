import React, { Component } from 'react'
import s from './CustomeQuotes.module.scss'
import QuotesSlider from './QuotesSlider/QuotesSlider';

export default class CustomeQuotes extends Component {
  render() {
    return (
      <section className={s.quotes}>
        <div className={s.wrapper}>
          <span className={s.subTitle}>
            TESTIMONIALS
          </span>
          <h2 className={s.title}>
            Customers's quotes
          </h2>
          <p className={s.text}>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.
          </p>
        </div>
        <QuotesSlider />
      </section>
    )
  }
}
