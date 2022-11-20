import './App.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

const target = document.getElementById('target');


function App() {

  return (
    <container>
      <div className="top_wrapper">
        <div className="gear_1">
          <div className="bar_1"></div>
          <div className="bar_2"></div>
          <div className="bar_3"></div>
          <div className="bar_4"></div>
          <div className="circle"></div>
        </div>

        <div className="gear_2">
          <div className="bar_1"></div>
          <div className="bar_2"></div>
          <div className="bar_3"></div>
          <div className="bar_4"></div>
          <div className="circle"></div>
        </div>
        
        <div className="ulwrapper">
          <ul>
            <li><a>About This Website</a></li>
            <li><a>About Me</a></li>
            <li><a>Contact Me</a></li>
          </ul>
        </div>
      </div>

    </container>

    
  );
}

export default App;
