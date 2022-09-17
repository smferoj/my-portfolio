import React from 'react'
import './nav.css';
import {HiOutlineHome} from 'react-icons/hi'
import {AiOutlineProfile} from 'react-icons/ai'
import {MdWork, MdContactMail} from 'react-icons/md'

 

const Nav = () => {
  return (
    
    <div className="nav_container">
     <nav>
      <a href=" #"> <HiOutlineHome className='nav_icon'/> Home</a>
      <a href="#about"> <AiOutlineProfile className='nav_icon' />About</a>
      <a href="#portfolio"><MdWork className='nav_icon' />Portfolio</a>
      <a href="#contact"> <MdContactMail className='nav_icon' /> Connect</a>
      </nav>
    </div>
   
  )
}

export default Nav