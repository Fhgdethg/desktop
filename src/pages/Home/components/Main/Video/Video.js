import React, { Component } from 'react'
import s from './Video.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import graph from '../../../../../assets/illustrations/videoImg.svg'
import VideoOnTitle from './VideOnTitle/VideoOnTitle';
import VideoSubTitle from './VideoSubTitle/VideoSubTitle';
import BtnPlay from './BtnPlay/BtnPlay';
import play from '../../../../../assets/icons/btnPlay.svg'
import './VideoPaginations.scss'


export default class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [
        {
          img: graph,
          onTitle: 'PLAN YOUR LIFE',
          titleText: 'Increase your',
          titleBold: 'productivity',
          subTitle: 'Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.',
          displayVideo: s.dNone,
          displayPhone: s.dFl,
          videoSrc: 'https://www.youtube.com/embed/fx7GDmpDiWA',
        },
        {
          img: graph,
          onTitle: 'PLAN YOUR LIFE',
          titleText: 'Increase your',
          titleBold: 'productivity',
          subTitle: 'Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.',
          displayVideo: s.dNone,
          displayPhone: s.dFl,
          videoSrc: 'https://www.youtube.com/embed/fx7GDmpDiWA',
        },
        {
          img: graph,
          onTitle: 'PLAN YOUR LIFE',
          titleText: 'Increase your',
          titleBold: 'productivity',
          subTitle: 'Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.',
          displayVideo: s.dNone,
          displayPhone: s.dFl,
          videoSrc: 'https://www.youtube.com/embed/fx7GDmpDiWA',
        },
      ],
    }
  }

  videoPlayer = (index) => {
    let slide = this.state.slides[index]
    this.setState({ [slide.displayVideo]: [s.dFlVideo] })
    slide.displayVideo = s.dFlVideo
    this.setState({ [slide.displayPhone]: [s.dNone] })
    slide.displayPhone = s.dNone
  }

  render() {
    return (
      <section>
        <Swiper
          pagination={
            true,
            {
              clickable: true,
            }
          }
          modules={[Autoplay, Pagination]}
          className={s.mySwiper}
          loop="true"
          >
          {
            this.state.slides.map((item, index) => {
              return (
                <SwiperSlide key={index} className={s.slide}>
                  <iframe src={item.videoSrc} allowFullScreen className={item.displayVideo}>
                  </iframe>
                  <div className={this.state.slides[index].displayPhone}>
                    <img src={item.img} alt="" className={s.img} />
                    <div className={s.wraper}>
                      <VideoOnTitle clName={s.onTitle}>
                        {item.onTitle}
                      </VideoOnTitle>
                      <h1 className={s.title}>
                        {item.titleText} <span className={s.title_bold}>
                          {item.titleBold}
                        </span>
                      </h1>
                      <VideoSubTitle clName={s.subTitle}>
                        {item.subTitle}
                      </VideoSubTitle>
                      <BtnPlay link={play} clName={s.btnPlay} onClickBtn={this.videoPlayer.bind(this, index)} />
                    </div>
                  </div>
                </SwiperSlide>)
            })
          }
        </Swiper>
      </section>
    )
  }
}
