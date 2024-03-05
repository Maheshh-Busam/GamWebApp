import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import ScrollTotopBtn from './Components/ScrollToTopBtn';
import BackgroundVideo from './Components/BackgroundVideo';
import { useParallax } from 'react-scroll-parallax';
import About from './Components/About';
import Media from './Components/Media';
import ContactUs from './Components/ContactUs';
import News from './Components/News';
import SocialMedia from './Components/SocialMedia';
 

function App() {
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const mediaSectionRef = useRef(null);
  const newsSectionRef = useRef(null);
  const socialMediaSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToAboutUs = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const homeSectionParallax = useParallax({
    scale: [1.15, 0.5, 'easeInQuad'],
    ref: homeSectionRef,
  });

  const aboutSectionParallax = useParallax({
    scale: [1.15, 0.5, 'easeInQuad'],
    ref: aboutSectionRef,
  });

  const mediaSectionParallax = useParallax({
    scale: [1.15, 0.5, 'easeInQuad'],
    ref: mediaSectionRef,
  });

  const newsSectionParallax = useParallax({
    scale: [1.15, 0.5, 'easeInQuad'],
    ref: newsSectionRef,
  });

  const socialMediaSectionParallax = useParallax({
    scale: [1.15, 0.5, 'easeInQuad'],
    ref: socialMediaSectionRef,
  });

  const contactSectionParallax = useParallax({
    scale: [1.15, 0.5, 'easeInQuad'],
    ref: contactSectionRef,
  });

  return (
    <div className="App">
      <Navbar />
      <div ref={homeSectionParallax.ref}>
        <BackgroundVideo scrollToAbout={scrollToAboutUs} />
      </div>
      <div ref={aboutSectionParallax.ref}>
        <div ref={aboutSectionRef} id='about'>
          <About />
        </div>
      </div>
      <div ref={mediaSectionParallax.ref} id='media'>
        <Media />
      </div>
      <div ref={newsSectionParallax.ref} id='news'>
        <News />
      </div>
       <div ref={socialMediaSectionParallax.ref} id='social-media'>
        <SocialMedia />
      </div>
       <div ref={contactSectionParallax.ref} id='contact-us'>
        <ContactUs />
      </div>
      <ScrollTotopBtn />
    </div>
  );
}

export default App;
