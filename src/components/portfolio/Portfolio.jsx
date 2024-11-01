import React from 'react'
import './portfolio.css'
import shooterai from '../../assets/shooterai.jpg'
import git from '../../assets/git.jpg'
import freerunner from '../../assets/freerunner.jpg'
import fubg from '../../assets/FUBG.webm'
import muktijuddho from '../../assets/Muktijuddho.webm'
import melee from '../../assets/melee.jpg'
import PADIMG1 from '../../assets/All My Art Works At A Glance.mp4';
import PADIMG2 from '../../assets/All My 3D Works At A Glance.mp4';
import { FiVolume2 } from "react-icons/fi";
import { FiVolumeX } from "react-icons/fi";



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
    id: 6,
    type: "video",
    image: muktijuddho,
    title: "Muktijuddho 1971",
    desc: "Telling the Story of Muktijuddho (Bangladesh Liberation War) | Hybrid Perspective Shooter RPG Game & Multiplayer Shooting Game | Unreal Engine",
    linktype: 'Steam',
    git: "https://store.steampowered.com/app/3062630/Muktijuddho_1971/",
    demo: "https://drive.google.com/file/d/1UAuWNusnITRRS1RMRq6C39uwi41MBgrb/view?usp=sharing",
  },
  {
    id: 5,
    type: "video",
    image: fubg,
    title: "FUBG",
    desc: "Fast-Paced Hybrid Perspective Multiplayer Shooting Game | Team-Based Combat Inspired by Classic FPS Gameplay | Unreal Engine",
    linktype: 'Steam',
    git: "https://store.steampowered.com/app/2262200/FUBG_FIGHT_UNKNOWN_BATTLEGROUND/",
    demo: "https://drive.google.com/file/d/1b7UVqDJjZ_-FEDknEUnVJ5sM9dub1ke9/view?usp=sharing",
  },

  {
    id: 4,
    type: "image",
    image: shooterai,
    title: "Shooter AI",
    desc: "Shooting AI With Different Behaviour or Skillset | Unreal Engine",
    linktype: 'Drive',
    git: "https://drive.google.com/file/d/1xcNoRYSYrxPq64GsAvv6gkAXpqdFFJ-E/view",
    demo: "https://drive.google.com/file/d/1R7922L2f3TmpGkaMHbEseRGbpwk09lrL/view?usp=sharing",
  },

  {
    id: 3,
    type: "image",
    image: melee,
    title: "Melee Attack Demo",
    desc: "A Simple Melee Attack AI Demo | Unreal Engine",
    linktype: 'Drive',
    git: "https://drive.google.com/file/d/1LVN1D5BNLTn_p-_iXKpAT1DF7sSzAaY7/view?usp=sharing",
    demo: "https://drive.google.com/file/d/16FlPg7kvW1NQvz6hAcc415nS4RQdV8jz/view?usp=sharing",
  },

  {
    id:2,
    type: "image",
    image: freerunner, 
    title: 'Free Runner',
    desc: 'Endless Runner Demo | Unreal Engine',
    linktype: 'Drive',
    git: 'https://drive.google.com/file/d/19nF2cMLcXkVHGn5P8NRLWIHmPdolX8xb/view?usp=sharing',
    demo: 'https://drive.google.com/file/d/1Yey0RQvxqDMmXbm8DQ5D35VNSqhBvsG7/view?usp=sharing'
  },
  
  {
    id:1,
    type: "image",
    image: git,
    title: "Other Development Works",
    desc: "Projects done during my academic period",
    linktype: 'Github',
    git: "https://github.com/nabil16497",
    demo: "https://drive.google.com/drive/folders/1wsGIAsOvA-w1Q2ip9OldeTv8_hpkIOJI?usp=sharing"
  },
  
]


const Portfolio = () => {
  const [mutedVideos, setMutedVideos] = React.useState({});

  const toggleMute = (id) => {
    setMutedVideos((prev) => {
      const newMutedState = !prev[id]; // Toggle the muted state
      // Get the video element and set its muted property
      const videoElement = document.getElementById(`video-${id}`);
      if (videoElement) {
        videoElement.muted = newMutedState; // Directly set the muted property
      }
      return { ...prev, [id]: newMutedState }; // Update state
    });
  };

  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Development Portfolio</h2>

      <div className="container__glass">
        <input type='radio' id="inputShownContent" name="group1" />
        <span id="myReadMore">
          <label htmlFor="inputShownContent"><span className='btnshow'>Show Projects</span></label>
        </span>
        <span id="spanHiddenContent">

          <div className="container portfolio__container">
            {
              data.map(({ id, type, image, title, desc, linktype, git, demo }) => {
                return (
                  <article key={id} className='portfolio__item'>
                    {type === 'image' ? (
                      <div className="portfolio__item-image">
                        <img src={image} alt='' />
                      </div>
                    ) : (
                      <div className="portfolio__item-video">
                        <video
                          autoPlay
                          loop
                          muted={mutedVideos[id] === undefined ? true : mutedVideos[id]} // Control mute based on state
                          playsInline
                        >
                          <source src={image} type="video/webm" />
                          Sorry. Your browser does not support the video.
                        </video>

                        <button
                          onClick={() => toggleMute(id)}
                          className="mute-toggle"
                          aria-label={mutedVideos[id] !== false ? "Unmute video" : "Mute video"}
                        >
                          {mutedVideos[id] !== false ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
                        </button>
                      </div>
                    )}
                    <h3>{title}</h3>
                    <small className='text-light'>{desc}</small>
                    <div className="portfolio__item-cta">
                      <a href={git} className='btn' target='_blank'>{linktype}</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                    </div>
                  </article>
                );
              })
            }
          </div>
          <label htmlFor="inputHiddenContent">
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