import React from 'react'
import './service.css';
import {BsCheckSquare} from 'react-icons/bs' 

const Service = () => {
  return (
     <section id="service">
      <h5> What I Offer </h5>
      <h2> Services</h2>
      <div className="container services_container">
        
        <article className="service">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>    
        </ul>
        </article>

         {/* End of UI/UX DESIGN  */}

        <article className="service">
        <div className="service_head">
          <h3>WEB DEVELOPMENT</h3>
        </div>
        <ul className="service_list">
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>   
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>  
        </ul>
        </article>
        {/* End of  Web Development */}
         
        <article className="service">
        <div className="service_head">
          <h3> CONTENT WRITING </h3>
        </div>
        <ul className="service_list">
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>
          <li> <BsCheckSquare className='service_list-icon'/> 
          <p> Lorem ipsum dolor sit amet  something should be written by somonone </p> 
          </li>    
        </ul>
        </article>

        {/* End of Content writing */}

      </div>

      
      </section>
  )
}

export default Service