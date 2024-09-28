import React from 'react'
import './portfolio.css'
import PIMG1 from '../../assets/java.png'
import PIMG2 from '../../assets/csharp.jpg'
import PIMG3 from '../../assets/os.png'
import PIMG4 from '../../assets/AI.jpg'
import PIMG5 from '../../assets/portal.png'
import PIMG6 from '../../assets/audiol.png'
import PIMG7 from '../../assets/freerunner.jpg'
import fubg from '../../assets/fubg.jpg'

/*
import PADIMG1 from '../../assets/nobu.jpg'
import PADIMG2 from '../../assets/solarsystem.jpg'
import PADIMG3 from '../../assets/buildings.jpg'
import PADIMG4 from '../../assets/city.jpg'
import PADIMG5 from '../../assets/uproom.jpg'
import PADIMG6 from '../../assets/crane.jpg'
import PADIMG7 from '../../assets/bbcnews.jpg'
import PADIMG8 from '../../assets/roomconceptart.jpg'
import PADIMG9 from '../../assets/aiub_c_building.jpg'
import PADIMG10 from '../../assets/speaker.jpg'
import PADIMG11 from '../../assets/pokeball.jpg'
import PADIMG12 from '../../assets/sofa.jpg'
import PADIMG13 from '../../assets/headphone.jpg'
import PADIMG14 from '../../assets/barcelonachair.jpg'
import PADIMG15 from '../../assets/wallclock.jpg'
*/

import PADIMG1 from '../../assets/All My Art Works At A Glance.mp4';
import PADIMG2 from '../../assets/All My 3D Works At A Glance.mp4';


const dataart = [
  {
    
    id: 2,
    video: PADIMG1, // Use the imported variable for the video URL
    title: "2D Art Works",
    desc: "",
    link: "https://drive.google.com/drive/folders/17ubLtALryOv07L7rImz86nJ7GH_f-Bfs",
  },

  {
    id: 1,
    video: PADIMG2, // Use the imported variable for the video URL
    title: "3D Models",
    desc: "",
    link: "https://drive.google.com/drive/folders/1MhUdEx1q617kx4R-kuYHNaQckMoMq52x",
  },
];





/*const dataart = [
  {
    id: ,
    image: PIMG,
    title: "",
    desc: "",
    link: "",
  },
  {
    id: 15,
    image: PADIMG15,
    title: "Wall Clock (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/151546103/Wall-Clock",
  },
  {
    id: 14,
    image: PADIMG14,
    title: "Barcelona Chair (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/151546551/Barcelona-Chair",
  },
  {
    id: 13,
    image: PADIMG13,
    title: "Headphone (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/151546347/Headphone",
  },
  {
    id: 12,
    image: PADIMG12,
    title: "Sofa (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/151546743/Sofa",
  },
  {
    id: 11,
    image: PADIMG11,
    title: "Pokeball (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/150712311/Pokeball",
  },
  {
    id: 10,
    image: PADIMG10,
    title: "Speaker (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/150860079/Speaker",
  },
  {
    id: 9,
    image: PADIMG9,
    title: "AIUB C Building (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/147420281/AIUB-C-Building",
  },
  {
    id: 8,
    image: PADIMG8,
    title: "Room Concept Art | Color  (One Point Perspective)",
    desc: "Photoshop",
    link: "https://www.behance.net/gallery/146399679/Room-Concept-Art-Color",
  },
  {
    id: 7,
    image: PADIMG7,
    title: "News Channel | Globe Loop (3D Animation)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/145498241/GLOBE-ANIMATION-%28NEWS-CHANNEL-GLOBE-LOOP%29",
  },
  
  {
    id: 6,
    image: PADIMG6,
    title: "Crane (Rigged 3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/143417617/Crane-%28Rigged%29",
    
  },
  {
    id: 5,
    image: PADIMG5,
    title: "UP Movie Room (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/143362931/Room-%28UP-Movie%29",
    
  },
  {
    id: 4,
    image: PADIMG4,
    title: "City (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/143417899/City",
    
  },
  {
    id: 3,
    image: PADIMG3,
    title: "Buildings (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/143412693/Buildings",
    
  },
 
  {
    id: 2,
    image: PADIMG2,
    title: "Soler System (3D Model)",
    desc: "Cinema 4D",
    link: "https://www.behance.net/gallery/143417163/Soler-System",
    
  },
  {
    id: 1,
    image: PADIMG1,
    title: "Nobu (Game Menu UI)",
    desc: "Photoshop",
    link: "https://www.behance.net/gallery/143434321/Nobu-%28Game-Menu-UI-Concept-Art%29",
    
  },

]
*/

const data = [
  /*{
    id: ,
    image: PIMG,
    title: "",
    desc: "",
    git: "",
    demo: "",
  },*/

  {
    id: 8,
    image: fubg,
    title: "FUBG",
    desc: "Hybrid Perspective Multiplayer Shooting Game | Unreal Engine",
    linktype: 'Steam',
    git: "https://store.steampowered.com/app/2262200/FUBG_FIGHT_UNKNOWN_BATTLEGROUND/",
    demo: "https://drive.google.com/file/d/1b7UVqDJjZ_-FEDknEUnVJ5sM9dub1ke9/view?usp=sharing",
  },

  {
    id: 8,
    image: PIMG7,
    title: "Shooter AI",
    desc: "Shooting AI With Different Behaviour or Skillset | Unreal Engine",
    linktype: 'Drive',
    git: "https://drive.google.com/file/d/1xcNoRYSYrxPq64GsAvv6gkAXpqdFFJ-E/view",
    demo: "https://drive.google.com/file/d/1R7922L2f3TmpGkaMHbEseRGbpwk09lrL/view?usp=sharing",
  },

  {
    id: 8,
    image: PIMG7,
    title: "Melee Attack Demo",
    desc: "A Simple Melee Attack AI Demo | Unreal Engine",
    linktype: 'Drive',
    git: "https://drive.google.com/file/d/1LVN1D5BNLTn_p-_iXKpAT1DF7sSzAaY7/view?usp=sharing",
    demo: "https://drive.google.com/file/d/16FlPg7kvW1NQvz6hAcc415nS4RQdV8jz/view?usp=sharing",
  },

  {
    id:7,
    image: PIMG7, 
    title: 'Free Runner',
    desc: 'Endless Runner Demo | Unreal Engine',
    linktype: 'Drive',
    git: 'https://drive.google.com/file/d/19nF2cMLcXkVHGn5P8NRLWIHmPdolX8xb/view?usp=sharing',
    demo: 'https://drive.google.com/file/d/1Yey0RQvxqDMmXbm8DQ5D35VNSqhBvsG7/view?usp=sharing'
  },
  
  {
    id:6,
    image: PIMG6,
    title: "Audio Processing",
    desc: "Python | Machine Learning | Deep Learning",
    linktype: 'Github',
    git: "https://github.com/nabil16497/Audio-Noise-Data-Machine-Learning-and-Deep-Lerning",
    demo: "https://drive.google.com/file/d/1xcNoRYSYrxPq64GsAvv6gkAXpqdFFJ-E/view?usp=sharing"
  },
  {
    id:5,
    image: PIMG5,
    title: "University Portal",
    desc: "Web App | HTML, PHP, CSS, JS",
    linktype: 'Github',
    git: "https://github.com/nabil16497/university_portal",
    demo: "https://drive.google.com/file/d/1tzCBedsDK9cczLdnuVH1Z4AZS2bhNqih/view?usp=sharing"
  },
  {
    id:4,
    image: PIMG4,
    title: "nQueen Problem, Genetic Algorithm, Map Coloring CSP (Artificial-Intelligence-Course-Algorithms)",
    desc: "Python | Console Application",
    linktype: 'Github',
    git: "https://github.com/nabil16497/Artificial-Intelligence-Course-Algorithms-nQueen-Problem-Genetic-Algorithm-Map-Coloring-CSP-",
    demo: "https://drive.google.com/file/d/1aVe-TjP3THBuZbAaNzyWJJgccpEzE18j/view?usp=sharing"
  },
  {
    id:3,
    image: PIMG3,
    title: "CPU Scheduling Algorithms",
    desc: "C++ | Console Application",
    linktype: 'Github',
    git: "https://github.com/nabil16497/Operating-System-Process-Scheduling-Algorithms",
    demo: "https://drive.google.com/file/d/1bJlwW7J5eRl2JDU7h8X03laO9aYRAYU4/view?usp=sharing"
  },
  {
    id:2,
    image: PIMG2,
    title: "Windows Voice Assistant",
    desc: "C# | Windows Form Application",
    linktype: 'Github',
    git: "https://github.com/nabil16497/C-Sharp-Windows-Voice-Assistant-",
    demo: "https://drive.google.com/file/d/1xcNoRYSYrxPq64GsAvv6gkAXpqdFFJ-E/view?usp=sharing"
  },
  {
    id:1,
    image: PIMG1,
    title: "School Management",
    desc: "Java | Console Application",
    linktype: 'Github',
    git:  "https://github.com/nabil16497/Java-School-Management-Project-Console-Application-and-File-System-",
    demo: "https://drive.google.com/file/d/1xcNoRYSYrxPq64GsAvv6gkAXpqdFFJ-E/view?usp=sharing"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Development Portfolio</h2>

      
      
      <div className="container__glass">

      <input type='radio' id="inputShownContent" name="group1" />
      <span id="myReadMore">
        <label for="inputShownContent"><span className='btnshow'>Show Projects</span></label>
      </span>
      <span id="spanHiddenContent">

      <div className="container portfolio__container">

      {
        data.map(({id, image, title, desc, linktype, git, demo}) =>{
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={image} alt='' />
          </div>
          <h3>{title}</h3>
          <small className='text-light'>{desc}</small>
          <div className="portfolio__item-cta">
          <a href={git} className='btn' target='_blank'>{linktype}</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
          </div>
    
        </article>

          )
        })
      }

      </div>
      <label for="inputHiddenContent">
    <span className='btnshow'>Hide</span>
    </label>
    </span>
    <input type='radio' id="inputHiddenContent" name="group1" />

      </div>

      <section></section>

      









      <h2>Design and Artwork Portfolio</h2>


     
      
      <div className="container__glass">

      <input type='radio' id="inputShownContent1" name="group2" />
      <span id="myReadMore1">
        <label for="inputShownContent1"><span className='btnshow'>Show Projects</span></label>
      </span>
      <span id="spanHiddenContent1">

      <div className="container portfolio__container1">

      {
  dataart.map(({ id, video, title, link }) => {
    return (
      <article key={id} className='portfolio__item'>
        <div className="portfolio__item-video">
          <video autoPlay loop muted playsInline> 
            <source src={video} type="video/mp4" />
            Sorry. Your browser does not support the video.
          </video>
        </div>
        <h3>{title}</h3>
        <div className="portfolio__item-cta">
          <a href={link} className='btn' target='_blank'>Check them Out</a>
        </div>
      </article>
    )
  })
}


      </div>
      
      <label for="inputHiddenContent1">
      
    <span className='btnshow'>Hide</span>
    </label>
    </span>
    <input type='radio' id="inputHiddenContent1" name="group2"/>

      </div>
      



    </section>


      
  )
}

export default Portfolio