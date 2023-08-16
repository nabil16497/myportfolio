import React from 'react'
import './certification.css'

import {BsAward} from 'react-icons/bs'
import {RiFileList2Line} from 'react-icons/ri'

// import Swiper core and required modules
import {Pagination, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/autoplay';
import IMG1 from '../../assets/deanslist.jpg'
import IMG2 from '../../assets/acclogodesign.jpg'
import IMG3 from '../../assets/gamedevtrain.jpg'




const data =[
  {
    avatar: IMG1,
    type: <BsAward/>,
    name: "DEAN'S LIST HONOR",
    inst: "Faculty of Science and Technology- American International University- Bangladesh | Fall 2018-2019",
    inst2: ""
  },
  
  {
    avatar: IMG2,
    type: <BsAward/>,
    name: '2nd RUNNER UP | LOGO DESIGN COMPETITION',
    inst: "AIUB CS Fest | 2018",
    inst2: ""
  },
  {
    avatar: IMG3,
    type: <RiFileList2Line/>,
    name: 'TRAINING FOR CROSS-PLATFORM GAME DEVELOPMENT',
    inst: "Mars Solution | organized by Bangladesh ICT Division | 2021",
    inst2: "Concept Art, Game Design, Level Design, 3D Modeling/Animation/Rigging, Game Development (Blueprint)"
  },
  
]

const Certification = () => {
  return (
    <section id='certification'>
      <h5>What I Have Achieved So Far</h5>
      <h2>Certifications & Achievements</h2>

      <div className="container__glass">
      <Swiper className="container certification__container" 
       modules={[Pagination,Autoplay]}
       spaceBetween={40}
       slidesPerView={1}
       autoplay={{delay:2000}}
       
      >
        {
          data.map(({avatar, type, name, inst, inst2}, index) => {
            return(
              <SwiperSlide key={index} className='certification'>
                <div className="certificate__img">
                <img src={avatar} alt={name} />
                <small className='certification__include'>
                  {inst2}
                </small>
                </div>
                
                <h5 className='certificate__name'>{type} {name}</h5>
                <small className='certificate__review'>
                  {inst}
                </small>
        
              </SwiperSlide>

            )
          })
        }

      </Swiper>
      </div>
    </section>
  )
}

export default Certification