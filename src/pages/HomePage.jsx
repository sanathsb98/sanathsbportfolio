import React, { useState, useEffect, useRef } from 'react';
import '../styles/HomePage.css';
import Navbar from '../components/Navbar';
import { motion, useAnimation } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { debounce } from 'lodash';
import video from '../videos/design.mp4';
import react from '../images/react.png';
import express from '../images/express.png';
import next from '../images/next.png';
import supabase from '../images/supabase.png';
import mongodb from '../images/mongodb.png';
import python from '../images/python.png'

const slideUp = {
  initial: {
    y: 300
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 }
  }
};

const HomePage = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  const controls = useAnimation();
  const [inViewRef1, inView1] = useInView();
  const [inViewRef2, inView2] = useInView();
  const [scrollDirection, setScrollDirection] = useState('down');

  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);
  const fifthText = useRef(null);
  const sixthText = useRef(null);
  const slider = useRef(null);
  const thirdLogo = useRef(null);
  const fourthLogo = useRef(null);
  const fifthLogo = useRef(null);
  const sixthLogo = useRef(null);
  const seventhLogo = useRef(null)
  let xPercent = 0;
  let direction = -20;

  const videoRef = useRef(null);

  useEffect(() => {
    const handleMetadataLoad = () => {
      videoRef.current.play();
    };
  
    // Add an event listener for metadata loaded
    videoRef.current.addEventListener('loadedmetadata', handleMetadataLoad);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      videoRef.current.removeEventListener('loadedmetadata', handleMetadataLoad);
    };
  }, []);
  

  useEffect(() => {
    const handleScroll = debounce(() => {
      const newScrollDirection = window.scrollY > 0 ? 'up' : 'down';
      setScrollDirection(newScrollDirection);
    }, 100); // Adjust the debounce delay as needed
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.2, // Adjust this value
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction = e.direction * -1;
        }
      },
      x: '-100px'
    });
    
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });
    gsap.set(fourthText.current, { xPercent: xPercent });
    gsap.set(fifthText.current, { xPercent: xPercent });
    gsap.set(sixthText.current, { xPercent: xPercent });
    gsap.set(thirdLogo.current, { xPercent: xPercent });
    gsap.set(fourthLogo.current, { xPercent: xPercent });
    gsap.set(fifthLogo.current, { xPercent: xPercent });
    gsap.set(sixthLogo.current, { xPercent: xPercent });
    gsap.set(seventhLogo.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.01 * direction;
  };

  useEffect(() => {
    if (inView1 || inView2) {
      controls.start({
        x: scrollDirection === 'down' ? '100%' : '-100%',
        transition: { duration: 10, ease: 'linear' },
        loop: Infinity // Add loop property to make it loop indefinitely
      });
    }
  }, [inView1, inView2, controls, scrollDirection]);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollDirection = window.scrollY > 0 ? 'up' : 'down';
      setScrollDirection(newScrollDirection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="homepage container ">
      <div className="section-1"></div>

      <div className="section-2">
        <div>
          <Navbar />
        </div>

        <div className="my-name">
          SANATH SB |{' '}
          <span style={{ color: 'rgb(145, 145, 145)' }}>
            <Typewriter
              words={['REACT JS', 'NEXT JS', 'EXPRESS JS', 'PYTHON', 'FULLSTACK DEVELOPER']}
              loop={5}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
      </div>

       <div className='section-3'>
        {/* <div className='balls-1'></div> */}
      

        <div data-scroll data-scroll-speed={0.1} className='section-3-sub-1'>
          <div className='section-3-sub-1-text1'>
          <motion.main variants={slideUp} initial="initial" animate="enter" className="landing">
        <div>
          <div ref={slider} className="slider">
            <p className='text-mode-1' ref={firstText}>DEVELOPER DESIGNER <span style={{color:'black'}}>DEVELOPER</span> DESIGNER <span style={{color:'black'}}>DEVELOPER</span> DESIGNER -</p>
            <p className='text-mode-2' ref={secondText}>DESIGNER DEVELOPER <span style={{color:'black'}}>DESIGNER</span> DEVELOPER DEVELOPER DESIGNER -</p>

                  <div ref={fourthLogo}  style={{marginTop:'100px', display: 'flex',justifyContent:'space-between',alignItems: 'center' }}>

                  
                    <img className='react-logo' src={react} alt="React Logo" />

                
                    <img className='express-logo' src={express} alt="Express Logo" />

                 
                    <img className='supabase-logo' src={supabase} alt="Express Logo" />

                    
                    <img className='mongodb-logo'  src={mongodb} alt="Express Logo" />

                    <img className='python-logo'  src={python} alt="Express Logo" />
                    
                    <img className='react-logo' src={react} alt="React Logo" />

                
                    <img className='express-logo'  src={express} alt="Express Logo" />

                 
                    <img className='supabase-logo'  src={supabase} alt="Express Logo" />

                    
                    <img className='mongodb-logo'  src={mongodb} alt="Express Logo" />

                    <img className='python-logo'  src={python} alt="Express Logo" />

                   
                  </div>
          </div>
        </div>
      </motion.main>
          </div>
        
        </div>
        
       

      </div>

    

      <div className="section-4">

     
  <div class="body">
    <div class="wrapper">
      <video ref={videoRef} class="clipped-video"  autoplay muted loop>
        <source src={video}>
        </source>
      </video>
      <svg height="100%" width="100%">
        <clipPath id="text-overlay" width="100%" height="100%">
          <text id="title" x="0" y="0" dy="1.58em">SHOWCASING</text>
          <text id="title" x="0" y="120" dy="1.58em">MY WORKS</text>
      
        </clipPath>
      </svg>
    </div>
  </div>
  
 


      </div>


{/* 
      <div className="section-5">section 5 height 100vh</div>
      <div className="section-6">section 6 height 100vh</div> */}
    </div>
  );
};

export default HomePage;



