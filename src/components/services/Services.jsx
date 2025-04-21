import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'


const skills = [
  {
    title: 'Unreal Engine',
    skillarr: [
    {
      p:'Game Mechanics Planning'
    },  
    {
      p:'Gameplay Programming'
    },
    {
      p:'NPC/AI/Bot Programming'
    },
    {
      p:'Multiplayer/Co-op Development'
    },
    {
      p:'Game UI Design'
    },
    {
      p:'Retargeting Characters and Animations'
    },
    {
      p: 'Asset/Plugin Modification'
    },
    {
      p: 'Technology Integration (e.g., Pixel Streaming, Live Link Face, Live Link VCam)'
    }

    ]
  },
  {
    title:'Additional Technical Skills',
    skillarr:[
      {
        p:'Version Control Systems (Git, SVN)'
      },
      {
        p:'Programming Languages (C/C++, Java, C#, Python, Assembly, HTML5, PHP, CSS)'
      },
      {
        p:'Cinema 4D (Basic 3D Modeling, Modular Modeling, and Visual Scripting)'
      },
      {
        p:'Basic Concept Art Skills (e.g., Color Theory, UI Design, Photo Editing)'
      },
      {
        p: 'Database (Oracle, MySQL, MS SQL, phpMyAdmin)'
      }
    ]
  }
]


const Services = () => {
  return (
    
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Skills</h2>



      <div className="container__glass">

      <div className="container services__container">

      {
        skills.map(({title,skillarr})=>{
          return(
            <article className='service'>
          <div className="service__head">
            <h3>{title}</h3>
          </div>
          <ul className= 'service__list'>
            {
              skillarr.map(({p}) =>{
                return(
                  <li>
                  <BsCheck className='service__list-icon' />
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

export default Services