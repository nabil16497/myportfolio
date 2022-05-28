import React from 'react'
import './extracurricularactivities.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const activity_data =[
  {
    title:'Scout',
    subtitle:'Former Member of DHAKA DISTRICT SEA ROVER'
  },
  {
    title:'Club Member',
    subtitle:'Former Member of AIUB COMPUTER CLUB'
  }
]
const hobby_data=[
  {
    title:'Playing Flute'
  },
  {
    title:'Sketching'
  },
  {
    title:'Digital Illustration'
  },
  {
    title:'Photo & Video Editing'
  },
  {
    title:'3D Modeling'
  },
]


const ExtracurricularActivities = () => {
  return (
    <section id='otheractivities'>
      <h5>What I Do in Free Times</h5>
      <h2>Extracurricular Activities & Hobbies</h2>
      <div className="container__glass">
      <div className="container extra__container">
        <div className="extra__frontend">
        <h3>Extracurricular Activities</h3>
        <div className="extra__content">
            {
              activity_data.map(({title,subtitle})=>{
                return(
                  <article className='extra__details'>
                    <BsPatchCheckFill className='extra__details-icon' />
                    <div>
                    <h4>{title}</h4>
                    <small className='text-light'>{subtitle}</small>
                    </div>
                  </article>
                )
              }
                
              )
            }        
        </div>
        </div>


        <div className="extra__backend">

        <h3>Hobbies</h3>
        <div className="extra__content2">
        {
              hobby_data.map(({title,subtitle})=>{
                return(
                  <article className='extra__details'>
                    <BsPatchCheckFill className='extra__details-icon' />
                    <div>
                    <h4>{title}</h4>
                    <small className='text-light'>{subtitle}</small>
                    </div>
                  </article>
                )
              }
                
              )
            }          
        </div>
        </div>


      </div>
      </div>
    </section>
  )
}

export default ExtracurricularActivities