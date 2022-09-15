import React from 'react'
import Video from './Video/Video'
import Partners from './Partners/Partners'
import Plan from './Plan/Plan'
import OurApp from './OurApp/OurApp'
import ProzentUsers from './ProzentUsers/ProzentUsers'
import Footer from './Footer/Footer'
import OurBlog from './OurBlog/OurBlog'
import CustomeQuotes from './CustomeQuotes/CustomeQuotes'
import CustomerHelp from './CustomerHelp/CustomerHelp'
import GetStart from './GetStart/GetStart'
import SingUp from './SingUp/SingUp'


const Main = () => {
  return (
    <main>
      <Video />
      <Partners />
      <Plan />
      <OurApp />
      <ProzentUsers />
      <OurBlog />
      <CustomeQuotes />
      <CustomerHelp />
      <GetStart />
      <SingUp />
      <Footer />
    </main>
  )
}

export default Main
