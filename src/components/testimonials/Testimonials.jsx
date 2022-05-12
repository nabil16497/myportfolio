import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/dp.png'
import IMG2 from '../../assets/dp.png'
import IMG3 from '../../assets/dp.png'
import IMG4 from '../../assets/dp.png'

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data =[
  {
    avatar: IMG1,
    name: 'M M Nabil',
    review: "IDK. I'll leave it blank for now"
  },
  {
    avatar: IMG2,
    name: 'M M Nabil',
    review: "IDK. I'll leave it blank for now"
  },
  {
    avatar: IMG3,
    name: 'M M Nabil',
    review: "IDK. I'll leave it blank for now"
  },
  {
    avatar: IMG4,
    name: 'M M Nabil',
    review: "IDK. I'll leave it blank for now"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Clients
        or Something Else
      </h5>
      <h2>Testimonials</h2>

      <div className="container__glass">
      <Swiper className="container testimonial__container" 
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                <img src={avatar} alt='' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
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

export default Testimonials