import React from 'react';
import myCV from '../../assets/dummy.pdf'

const HeaderBtn = () => {
  return (
    <div className='header_btn'>
       <a href={myCV} download className='btn'>Download CV</a> 
       <a href="#contact" className='btn btn-primary'>Connect Me</a> 
    </div>
  )
}

export default HeaderBtn