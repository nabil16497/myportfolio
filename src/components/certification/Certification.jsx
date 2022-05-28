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




const data =[
  {
    avatar: '',
    type: <BsAward/>,
    name: "DEAN'S LIST HONOR",
    inst: "Faculty of Science and Technology- American International University- Bangladesh | Fall 2018-2019"
  },
  
  {
    avatar: '',
    type: <BsAward/>,
    name: '2nd RUNNER UP | LOGO DESIGN COMPETITION',
    inst: "AIUB CS Fest | 2018"
  },
  {
    avatar: '',
    type: <RiFileList2Line/>,
    name: 'TRAINING FOR CROSS-PLATFORM GAME DEVELOPMENT',
    inst: "Mars Solution | organized by Bangladesh ICT Division | 2021"
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
       pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, type, name, inst}, index) => {
            return(
              <SwiperSlide key={index} className='certification'>
                {/*<div className="client__avatar">
                <img src={avatar} alt='' />
                </div>*/}
                <h5 className='client__name'>{type} {name}</h5>
                <small className='client__review'>
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