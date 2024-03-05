import React from 'react';
import './ScrollToTopBtn.css';

function ScrollToTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      Scroll To Top
    </button>
  );
}

export default ScrollToTopBtn;
