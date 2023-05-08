import React from 'react'
import './about.css'
import ME from '../../assets/about1.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {AiOutlineFolderAdd} from 'react-icons/ai'
import {BsCheck} from 'react-icons/bs'

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
            <div className='about__card__edu'>

              <h6><BsCheck/> AMERICAN INTERNATIONAL UNIVERSITY BANGLADESH</h6>
              <small>Bachelor of Science in Computer Science
              Engineering (2018-2021)<br></br>
              CGPA- 3.9 out of 4</small>
              <br></br>
              <h6><BsCheck/> B C I C COLLEGE</h6>
              <small>HSC (2017)</small><br></br>
              <small>GPA- 4.25 out of 5</small>
              <br></br>
              <h6><BsCheck/> MONIPUR HIGH SCHOOL AND COLLEGE</h6>
              <small>SSC (2015)</small><br></br>
              <small>GPA- 4.89 out of 5</small></div>


              <span><FaGraduationCap className='about__icon' />
            <h5>Education</h5>
            <small>BSc CSE<br></br>(American International University Bangladesh)</small></span>
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