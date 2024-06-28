import React from 'react'
import './About.css'

import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayState(true)}} />
        </div>
        <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
         <p>Begin your transformative educational journey with our university’s comprehensive programs designed to equip you with the knowledge, skills, and experiences essential for excelling in the ever-evolving field of education.</p>

         <p>Our forward-thinking curriculum emphasizes innovation, experiential learning, and personalized mentorship, ensuring that our students are well-prepared to make significant contributions in classrooms, schools, and communities.
        </p>
         <p>Whether your goal is to become a teacher, administrator, counselor, or educational leader, our diverse range of programs provides the ideal pathway to achieve your aspirations and unlock your full potential in shaping the future of education. Join us and be a part of a community dedicated to nurturing tomorrow's leaders today
         </p>
         </div>
    </div>
  )
}

export default About