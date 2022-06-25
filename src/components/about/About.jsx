import React from 'react'
import './about.css'
import ME from '../../assets/about1.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {AiOutlineFolderAdd} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container__glass">
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='About Me' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
           <article className='about__card'>
             <FaGraduationCap className='about__icon' />
            <h5>Education</h5>
            <small>BSc CSE<br></br>(American International University Bangladesh)</small>
           </article>




           <article className='about__card'>
             <AiOutlineFolderAdd className='about__icon' />
            <h5>Currently In Practice</h5>
            <small>Game Design & Development (Unreal Engine)</small>
           </article>
          </div>

          <p>
          A very optimistic and hardworking individual. I am also an enthusiastic learner. I am a quick learner and exceptionally great when it comes to analytical and logical problems which gives me leverage on learning new things.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About