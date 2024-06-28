import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero =()  => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better education for better world</h1>
            <p>Our cutting-edge curriculuim is design to empower students with the knowledge,skills, and experiences need to exel in the dynamic field of eduaction</p>
            <button className='btn'>Explore more <img src={dark_arrow}/> </button>
        </div>
    </div>
  )
}

export default Hero