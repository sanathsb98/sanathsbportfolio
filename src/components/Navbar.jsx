import React, { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css';
import ProfilePic from '../images/profilepic.jpg.png';

const Navbar = () => {
  const navbarRef = useRef(null);
  const pathRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      const element = navbarRef.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        setScrollPosition(top); // Use -top to get the scroll position relative to the element.
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Select the path element using the ref
    const path = pathRef.current;

    if (path) {
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;

      const handleScroll = () => {
        const scrollPercentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);
        const drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Only run this effect once

  // Determine whether to apply the fixed-navbar class based on scrollPosition
  const isFixed = scrollPosition <= 0;

  return (
    <div style={{ position: 'relative' }}>
      <div className="line-container container">
        <svg
          preserveAspectRatio="xMidYMax meet"
          style={{ position: 'absolute' }}
          xmlns="http://www.w3.org/2000/svg"
          width="636"
          height="3209"
          viewBox="0 0 636 3209"
          fill="none"
        >
          <path
            ref={pathRef} // Add the ref here
            d="M316.5 0.5C365 64.5 432.9 232.4 316.5 392C171 591.5 688.5 614.5 631 775.5C573.5 936.5 128.5 963.5 316.5 1527.5C504.5 2091.5 489.5 2080.5 389.5 2276C289.5 2471.5 -301 2812.5 201.5 2997C603.5 3144.6 494.333 3199.17 389.5 3208"
            stroke="rgb(145, 145, 145)"
            strokeWidth={10}
          />
        </svg>
      </div>

      <div style={{ height: '2px' }} ref={navbarRef}></div>
      {isFixed ? (
        <div className="navbar-container animate-navbar container">
          <div className="navbar-contents-after">
            <div className="contents-left">
              <div>Sanath SB</div>
              <div className='about'>About</div>
              <div className='work'>Work</div>
            </div>
            <div className="contents-right">
              <div className='lets-connect'>LET'S CONNECT</div>
              <div className="email-tab">itssanathsb@gmail.com</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-container navbar container">
          <div className="navbar-contents-before">
            <div className="navbar-contents-before-content"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;


