// ThreeDropDowns.js
import React from 'react';
import '../Components/Purchase.css';
import Navbar from './Navbar';

function Purchase() {
  return (

    <div className='container'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <div className='dropdowns'>
          <select>
            <option value='option1'>INDIA</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </select>
          <select>
            <option value='option1'>STEAM</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </select>
          <select>
            <option value='option1'>DIGITAL EDITION</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </select>
          <button>PURCHASE</button>
        </div>
        <div className='text'>
          <h2>Digital Edition</h2>
          <p>
            TONY HAWK'S PRO SKATER 1 + 2 GANMES
          </p>
        </div>
      </div>
    </div>
  )
}

export default Purchase;
