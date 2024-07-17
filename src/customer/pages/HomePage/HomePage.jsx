import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_tshirt } from '../../../Data/Mens_tshirts';

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_tshirt} sectionName={"Mens Tshirts"}/>
            <HomeSectionCarousel data={mens_tshirt}/>
          

        </div>
      
    </div>
  )
}

export default HomePage
