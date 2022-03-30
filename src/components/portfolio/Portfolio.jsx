import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/dp.png'
import IMG2 from '../../assets/dp.png'
import IMG3 from '../../assets/dp.png'
import IMG4 from '../../assets/dp.png'
import IMG5 from '../../assets/dp.png'
import IMG6 from '../../assets/dp.png'



const data = [
  {
    id:1,
    image: IMG1,
    title: "Portfolio Item Title",
    git: "https://github.com",
    demo: "https://youtube.com"
  },
  {
    id:2,
    image: IMG2,
    title: "Portfolio Item Title",
    git: "https://github.com",
    demo: "https://youtube.com"
  },
  {
    id:3,
    image: IMG3,
    title: "Portfolio Item Title",
    git: "https://github.com",
    demo: "https://youtube.com"
  },
  {
    id:4,
    image: IMG4,
    title: "Portfolio Item Title",
    git: "https://github.com",
    demo: "https://youtube.com"
  },
  {
    id:5,
    image: IMG5,
    title: "Portfolio Item Title",
    git: "https://github.com",
    demo: "https://youtube.com"
  },
  {
    id:6,
    image: IMG6,
    title: "Portfolio Item Title",
    git: "https://github.com",
    demo: "https://youtube.com"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      
      <div className="container__glass">

      <div className="container portfolio__container">

      {
        data.map(({id, image, title, git, demo}) =>{
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={image} alt='' />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={git} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
    
        </article>

          )
        })
      }

      </div>
      </div>
    </section>
  )
}

export default Portfolio