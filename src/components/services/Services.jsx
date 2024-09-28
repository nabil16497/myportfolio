import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'


const skills = [
  {
    title: 'Technical Skills',
    skillarr: [
    {
      p:'Unreal Engine Development'
    },  
    {
      p:'C and C++ Console Application'
    },
    {
      p:'Java Console & WindowsForm Application'
    },
    {
      p:'C# Console & WindowsForm Application'
    },
    {
      p:'Python incl. Machine Learning and Deep Learning'
    },
    {
      p:'Assembly Language (Intel 8086)'
    },
    {
      p:'HTML5'
    },
    {
      p:'PHP (Raw PHP)'
    },
    {
      p:'CSS (Raw CSS)'
    },
    {
      p:'XPresso or Visual Scripting(Cinema 4D)'
    },
    
    

    ]
  },
  {
    title: 'Tools/ IDEs',
    skillarr: [
      {
        p:'Unreal Engine'
      },
      {
        p:'Code Blocks'
      },
      {
        p:'Visual Studio'
      },
      {
        p:'Visual Studio Code'
      },
      {
        p:'NetBeans'
      },
      {
        p:'EMU8086'
      },
      {
        p:'Anaconda'
      },
      {
        p:'Jupyter Notebook'
      },
      {
        p:'GitHub'
      },
      {
        p:'Cinema 4D'
      },

     
      
    ]
  },

  {
    title:'Database Tools',
    skillarr:[
      {
        p:'Oracle'
      },
      {
        p:'MySQL'
      },
      {
        p:'MS SQL'
      },
      {
        p:'phpMyAdmin'
      }
    ]
  },

  {
    title:'Art & Design Skills',
    skillarr: [
      {
        p:'Basic Color Theory Knowledge'
      },
      {
        p:'UI Design'
      },
      {
        p:'Photo Editing and Manipulation'
      },
      {
        p:'Illustration and Logo Design'
      },
      {
        p:'Basic Video & Audio Editing'
      },
      {
        p:'3D Modeling'
      },
      {
        p:'3D Animation'
      },
      {
        p:'3D Model Rigging'
      }
    ]
  },

  {
    title:'Art & Design Tools',
    skillarr:[
      {
        p:'Adobe Photoshop'
      },
      {
        p:'Adobe Illustrator'
      },
      {
        p:'Adobe Audition'
      },
      {
        p:'Adobe Premiere Pro'
      },
      {
        p:'Adobe Xd'
      },
      {
        p:'Cinema 4D'
      }
    ]
  },

  {
    title:'General Tools',
    skillarr:[
      {
        p:'Microsoft Word'
      },
      {
        p:'Google Doc'
      },
      {
        p:'Microsooft Excel'
      },
      {
        p:'Google Spreadsheet'
      },
      {
        p:'Microsoft Powerpoint'
      },
      {
        p:'Microsoft Visio'
      },
      {
        p:'Microsoft Project'
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