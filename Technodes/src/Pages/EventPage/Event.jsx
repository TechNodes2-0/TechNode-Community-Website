import React from 'react'
import HeroSection from '../../components/core/Eventpage/Herosection'
import EventCards from '../../components/core/Eventpage/EventCards'
import NewsLetter  from "../../components/NewsLetter"
import Footer  from "../../components/Footer"

export default function Event() {
  return (
    <div className='bg-[#141414]'>
   <HeroSection/>
   <EventCards/>
   <NewsLetter/>
   <Footer/>
   </div>
  )
}
