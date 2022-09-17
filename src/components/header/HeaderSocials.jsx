import React from 'react';
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.twitter.com/" target= ""><BsTwitter /></a>
        <a href=" http://github.com" target = "_blank"><BsGithub /></a>
        <a href=" http://linkedin.com" target = "_blank"><AiFillLinkedin/></a> 
        </div>
  )
}

export default HeaderSocials