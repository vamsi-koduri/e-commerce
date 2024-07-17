
import React,{ useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';


const HomeSectionCarousel = ({data,sectionName}) => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const[activeIndex,setActiveIndex]=useState(0);
    

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);
  
    
    const syncActiveIndex=({item})=>setActiveIndex(item);
    
    const items=data.slice(0,10).map((item)=><HomeSectionCard  product={item}/>);
    
  return (
    <div className='border '>
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
           key={activeIndex}
           items={items}
           activeIndex={activeIndex}
           onSlideChanged={syncActiveIndex}
           responsive={responsive}
           disableDotsControls
           disableButtonsControls
        />
      { activeIndex !== items.length-5 && <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{
            position: 'absolute',
            top: '8rem',
            right: '0rem',
            transform:'translateX(50%) rotate(90deg)',
            backgroundColor: 'white',
            color: 'black', // Set text color to black for better contrast
            '&:hover': {
              backgroundColor: '#f0f0f0', // Change hover color if needed
            },
          }}
          aria-label="next"
      
    >
      <KeyboardArrowLeftIcon  sx={{transform:'rotate(90deg)'}}/>
    </Button>}
    {activeIndex !==0 && <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform:'translateX(-50%) rotate(90deg)',
            backgroundColor: 'white',
            color: 'black', // Set text color to black for better contrast
            '&:hover': {
              backgroundColor: '#f0f0f0', // Change hover color if needed
            },
          }}
          aria-label="next"
      
    >
      <KeyboardArrowLeftIcon  sx={{transform:'rotate(-90deg)'}}/>
    </Button>}
      </div>
    </div>
  )
}

export default HomeSectionCarousel;