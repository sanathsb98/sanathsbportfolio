import React, { useState, useEffect, useRef } from 'react';
import '../styles/HomePage.css';
import Navbar from '../components/Navbar';
import { motion, useAnimation } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const HomePage = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  const controls = useAnimation();
  const [inViewRef1, inView1] = useInView();
  const [inViewRef2, inView2] = useInView();
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    if (inView1 || inView2) {
      controls.start({
        x: scrollDirection === 'down' ? '100%' : '-100%',
        transition: { duration: 10, ease: 'linear' },
        loop: Infinity, // Add loop property to make it loop indefinitely
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
    <div className='homepage'>
      <div className='section-1'></div>

      <div className='section-2'>
        <div>
          <Navbar />
        </div>

        <div className='my-name'>
          SANATH SB |{' '}
          <span style={{ color: 'rgb(85, 85, 106)' }}>
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

        <div data-scroll data-scroll-speed={0.1} className='section-3-sub-1'>
          <div className='section-3-sub-1-text1' ref={inViewRef1}>
            <motion.div animate={controls}>DEVELOPER </motion.div>
          </div>
          <div className='section-3-sub-1-text1' ref={inViewRef2}>
            <motion.div animate={controls}>DEVELOPER</motion.div>
          </div>
        </div>
        
        <div className='section-3-sub-2'>
          <div className='intro-ball'></div>
        </div>
        <div className='section-3-sub-3'>
          <div className='section-3-sub-1-text1' ref={inViewRef1}>
            <motion.div animate={controls}>DEVELOPER </motion.div>
          </div>
          <div className='section-3-sub-1-text2' ref={inViewRef2}>
            <motion.div animate={controls}>DEVELOPER </motion.div>
          </div>
        </div>
      </div>

      <div className='section-4'>section 4 height 100vh</div>
      <div className='section-5'>section 5 height 100vh</div>
      <div className='section-6'>section 6 height 100vh</div>
    </div>
  );
};

export default HomePage;


