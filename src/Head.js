import './Head.css';
import React, { useState, useEffect} from 'react';
import { Link as Scroll } from 'react-scroll';

function Head() {

  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  const menu = (
    <div className="menuarea">
      <a>About This Website</a>
      <a>About Me</a>
      <a>Contact Me</a>
    </div>
  )


  return (
    <container className="head">
      <div className="head2">
        <div className="menu_button" onClick={toggle}><span className='hovering'>{open ? 'close' : 'open'}</span><span className='default'>≡</span></div>
        <div className={open ? 'isOpen' : 'isClose'}>
        <div>{menu}</div>
        </div>
      </div>
    </container>

    );
}

export default Head;