import React, { Component } from 'react'
import s from './BlogSlider.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import './BlogSlider.scss'
import laptop from '../../../../../../assets/images/laptop.png'
import laptopSm from '../../../../../../assets/images/laptopSm.png'
import client from '../../../../../../assets/images/Client.png'
import search from '../../../../../../assets/icons/search.svg'
import SliderInfo from './SliderInfo/SliderInfo';

export default class BlogSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [
        {
          skaleImg: laptop,
          skaleBlockCl: '',
          imgBlockCl: '',
          links: [
            laptopSm,
            client,
            search
          ],
          title: 'How to start planning',
          subTitle: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...',
          btnText: 'Read now',
          bottomRightText: 'Add to your bookmarks',
          popapWrapperCl: '',
          popapImg: ''
        },
        {
          skaleImg: laptop,
          links: [
            laptopSm,
            client,
            search
          ],
          title: 'How to start planning',
          subTitle: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...',
          btnText: 'Read now',
          bottomRightText: 'Add to your bookmarks'
        },
        {
          skaleImg: laptop,
          links: [
            laptopSm,
            client,
            search
          ],
          title: 'How to start planning',
          subTitle: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...',
          btnText: 'Read now',
          bottomRightText: 'Add to your bookmarks'
        },

      ]
    }
  }

  popap = (index, e) => {
    if (this.state.slides[index].popapWrapperCl === '') {
      this.setState({ popapWrapperCl: s.popapWrapperCl })
      this.state.slides[index].popapWrapperCl = s.popapWrapperCl
      this.setState({ popapImg: s.popapImg })
      this.state.slides[index].popapImg = s.popapImg
      e.target.slyle.display = 'none'
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
        modules={[Navigation, Pagination]}
        className={`${s.mySwiper} blogSwiper`}
        loop="true"
        navigation
        spaceBetween={3000}
        speed={600}
      >
        {
          this.state.slides.map((item, index) =>
            <SwiperSlide className={s.slide} key={index}>
              <div className={s.slideCard}>
                <div className={`${s.slideImages}`}>
                  <div className={`${s.searchImg} ${this.state.slides[index].popapWrapperCl}`}>
                    <img
                      src={item.skaleImg}
                      alt=""
                      className={`${s.laptop} ${this.state.slides[index].popapImg}`}
                    />
                    <div
                      className={s.search}
                      onClick={this.popap.bind(this, index)}>
                      <img src={item.links[2]} alt="" />
                    </div>
                  </div>
                  <div className={s.slideImagesSmall}>
                    <img src={item.links[0]} alt="" className={s.smallImg} />
                    <img src={item.links[1]} alt="" />
                  </div>
                </div>
              </div>
              <SliderInfo
                title={item.title}
                btnText={item.btnText}
                bottomRightText={item.bottomRightText
                }>
                {item.subTitle}
              </SliderInfo>
            </SwiperSlide>
          )
        }
      </Swiper>
    )
  }
}
