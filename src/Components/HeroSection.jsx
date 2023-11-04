import React from 'react'
import BannerImage from '../assets/restauranfood.jpg'
import './HeroSection.css'
import { Button } from '@chakra-ui/react'
function HeroSection() {
  return (
    <div className='herosection_banner'>
      <div className="herosection_container">
        <div className="herosection_content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with modren twist.</p>
            <Button colorScheme='yellow' borderRadius={20} size={'lg'}>Reserve a Table</Button>
        </div>
        <img className='banner_image' src={BannerImage}/>
      </div>
    </div>
  )
}

export default HeroSection