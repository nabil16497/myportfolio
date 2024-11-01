import React from 'react'
import './experience.css'
import {BsCheck} from 'react-icons/bs'


const skills = [
  {
    title: ' Unreal Engine Developer (VR)',
    place: 'Vinacts (Bangladesh)',
    time: 'June 2024 - Present',
    skillarr: [
    {
      p:'Understanding client requirement.'
    },  
    {
      p:'Develop VR Simulation/ Scenario according to client requirement.'
    },
    {
      p:'Create necessary blueprints/ re-write blueprints.'
    },
    {
      p:'Debug Simulation/ Scenario.'
    },
    ]
  },
  {
    title:'Unreal Engine Developer',
    place: 'Spinoff Studio',
    time: 'December 2023 – May 2024 (Contract)',
    skillarr:[
      {
        p:'Planning and implement game mechanics according to the game design.'
      },
      {
        p:'Implementing necessary AI/ Bot/ NPC.'
      },
      {
        p:'Merging team member’s works.'
      },
      {
        p:'Network programming/ managing functions for multiplayer/ co-op.'
      },
      {
        p:'Studying and modifying Assets/ Plugins.'
      },
      {
        p:'Managing project settings'
      },
      {
        p:'Implementing UI/UX for the game.'
      },
      {
        p:'Retargeting characters and character animations.'
      },
      {
        p:'Handling build error and bug fixing.'
      },
      {
        p: 'Analyzing optimization issues.'
      },
      {
        p:'Documenting workflows and tasks.'
      },
      {
        p: ' Studying technologies to implement, e.g., Live Link Face, Live Link VCam, Character Creator 4 to Unreal Engine.'
      }
    ]
  }
]


const Experience = () => {
  return (
    
    <section id='experience'>
      <h5>My Journey</h5>
      <h2>Experiences</h2>



      <div className="container__glass">

      <div className="container services__container">

      {
        skills.map(({title,place,time,skillarr})=>{
          return(
            <article className='experience'>
          <div className="experience__head">
            <h3>{title}</h3>
            <small>{place}</small>
            <h5>{time}</h5>

          </div>
          <ul className= 'experience__list'>
            {
              skillarr.map(({p}) =>{
                return(
                  <li>
                  <BsCheck className='experience__list-icon' />
                 <p>{p}</p>
                  </li>
      
                )
              })
            }
          </ul>
        </article>
          )
        }

        )
      }

      </div>
      </div>
    </section>
  )
}

export default Experience