import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouseData } from './MainCarouselData';




const MainCarousel = () => {
    
    const items = mainCarouseData.map((item)=><img className='cursor-pointer'  role='presentation' src={item.image} alt=""/>)
    return (
    <AliceCarousel
        items={items}
        items-center
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    )
 }

export default MainCarousel;
