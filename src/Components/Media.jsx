// Media.jsx
import React from 'react';
import '../Components/Media.css';

function Media() {
  return (
    <div className='container'>
      <div className='media-container'>
      <div className='heading'>
        <h1>Media</h1>
      </div>
      <div className='content'>
        <div className='media-item'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-kJM_d4LYDZ4e93T_8EPxqQ4HQjAOTZcHBFgZipt_g&s' alt='Media Item' />
          <h2>Sample Media Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ullamcorper ex, et tempus libero.</p>
        </div>
        <div className='media-item'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-kJM_d4LYDZ4e93T_8EPxqQ4HQjAOTZcHBFgZipt_g&s' alt='Media Item' />
          <h2>Sample Media Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ullamcorper ex, et tempus libero.</p>
        </div>
        <div className='media-item'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-kJM_d4LYDZ4e93T_8EPxqQ4HQjAOTZcHBFgZipt_g&s' alt='Media Item' />
          <h2>Sample Media Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ullamcorper ex, et tempus libero.</p>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Media;
