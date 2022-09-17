import React from 'react'
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import {useRef} from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_izunaq5', 'template_lgcwyeb', form.current, '_YG58xdLQoN9mVF4Z')
  e.target.reset();
};
  return (
    <div id="contact">
      <h5> Get in Touch</h5>
      <h2> Contact Me </h2>
     <Container>
    <Row>
     <Col lg={6}> 
     <div className="contact_options">
       <article className='contact_option'>
          <AiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>sm.feroj@gmail.com</h5>
            <a href="mailto:sm.feroj@gmail.com" target= "_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
          <BsMessenger className='contact_option-icon'  />
            <h4>Messanger</h4>
            <h5></h5>
            <a href="https://m.me/firoj.mahmud.737" target= "_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
           <ImWhatsapp className='contact_option-icon'  />
            <h4>Whats app </h4>
            <h5>+880-1724703700</h5>
            <a href="https://api.whatsapp.com/send?phone+8801724703700" target= "_blank" >Send a Message</a>
          </article>
       </div>
     </Col>
     
     <Col lg={6}>
      <div className="contact_container">
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='user_name' placeholder='your Full Name' required />
         <input type="email" name="user_email" placeholder='Your Email' required />
         <textarea name='message' rows="7" placeholder='your Message'></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
     </div>
     </Col>
     </Row>
     </Container>

          
    </div>
    
    
  )
}

export default Contact