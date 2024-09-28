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

            
           <article className='about__card extrac'>
            <div className='about__card__edu'>
              <ul>
                <li>
                  <h6><BsCheck/> AMERICAN INTERNATIONAL UNIVERSITY BANGLADESH</h6>
                  <small>B.Sc. in Computer Science
                  Engineering (2018-2021)<br></br>
                  CGPA- 3.9 out of 4</small>
                </li>

              </ul>
              </div>
              
              <span><FaGraduationCap className='about__icon' />
            <h5>Education</h5>
            <small>BSc CSE</small></span>
            <p className='about__icon'></p>
           </article>

            


           <article className='about__card extrac'>
            <div className='about__card__edu'>
                <ul>
                  <li>
                    <h6><BsCheck/> Unreal Engine</h6>
                    <small>Game Play Programming<br></br>
                            Programming NPC/AI<br></br>
                            Network Programming<br></br>
                            Game UI
                    </small>
                  </li>

                </ul>
                </div>
            <span><AiOutlineFolderAdd className='about__icon' />
            <h5>Currently In Practice</h5>
            <small>Game Development</small><br></br>
            <small></small></span>
           </article>
          </div>

          <p>
          I am an Unreal Engine Developer. I am a very optimistic and hardworking individual. I am also an enthusiastic learner. I am a quick learner and exceptionally great when it comes to analytical and logical problems which gives me leverage in learning new things.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About