import React, { Component } from 'react'
import s from './QuotesSlider.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import client_1 from '../../../../../../assets/images/Customer_1.png'
import './QuotesSlider.scss'

export default class QuotesSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [
        {
          textComent: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
          photoLink: client_1
        },
        {
          textComent: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.'
        },
        {
          textComent: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
          photoLink: client_1
        },
        {
          textComent: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.'
        },
        {
          textComent: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
          photoLink: client_1
        },
        {
          textComent: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.'
        },
        {
          textComent: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
          photoLink: client_1
        },
        {
          textComent: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.'
        },
        {
          textComent: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
          photoLink: client_1
        },
      ]
    }
  }
  render() {
    return (
      <Swiper
        pagination={
          true,
          {
            clickable: true,
          }}
        modules={[Pagination]}
        className={`${s.mySwiper} quotesSwiper`}
        loop="true"
        spaceBetween={64}
        speed={600}
        breakpoints={
          {
            '940': { slidesPerView: 2 },
          }
        }
      >
        {
          this.state.slides.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <SwiperSlide className={s.slide}>
                  <p className={s.customerComent}>
                    {item.textComent}
                  </p>
                  <img src={item.photoLink} alt="" className={s.customerPhoto} />
                </SwiperSlide>
              )
            }
            else {
              return (
                <SwiperSlide className={s.slide}>
                  <p className={s.customerComent}>
                    {item.textComent}
                  </p>
                </SwiperSlide>
              )
            }
          })
        }
      </Swiper>
    )
  }
}
