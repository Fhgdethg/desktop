import React, { Component } from 'react'
import s from './OurApp.module.scss'
import VideoOnTitle from '../Video/VideOnTitle/VideoOnTitle'
import overViev from '../../../../../assets/icons/Overview.svg'
import files from '../../../../../assets/icons/files.svg'
import chats from '../../../../../assets/icons/chats.svg'
import save from '../../../../../assets/icons/save.svg'
import AppInfo from './AppInfo/AppInfo'
import Btn from '../../../../../shared/Header/Inner/Btn/Btn'
import line from '../../../../../assets/icons/lineBtn.svg'

export default class OurApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appInfos: [
        {
          iconLink: overViev,
          onTitleText: 'Overview',
          text: 'Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.'
        },
        {
          iconLink: files,
          onTitleText: 'Files',
          text: 'No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.'
        },
        {
          iconLink: chats,
          onTitleText: 'Meeting chats',
          text: 'Vim ne tacimates neglegentur. Erat diceret omittam at est.'
        },
        {
          iconLink: save,
          onTitleText: 'Save events',
          text: 'Nisl idque mel ea, nominati voluptatum.'
        },
      ]
    }
  }
  render() {
    return (
      <section className={s.ourApp}>
        <div className={s.container}>
          <VideoOnTitle>
            ABOUT US
          </VideoOnTitle>
          <h3 className={s.title}>
            Read about our app
          </h3>
          <div className={s.appInfos}>
            {
              this.state.appInfos.map((item, index) =>
                <AppInfo
                  icon={item.iconLink}
                  onTitle={item.onTitleText}
                  text={item.text}
                  key={index}
                />
              )
            }
          </div>
          <div className={s.btns}>
            <Btn clBtn={s.redBtn}>
              Read more
            </Btn>
            <Btn clBtn={s.noneCol}>
              <img src={line} alt="" className={s.line} />
              <span className={s.noneColTxt}>OR</span>
              <img src={line} alt="" className={s.line} />
            </Btn>
            <Btn clBtn={s.btn}>
              Get started
            </Btn>
          </div>
        </div>
      </section>
    )
  }
}
