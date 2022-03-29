import React from 'react'
import './contact.css'
import {RiMailLine} from 'react-icons/ri'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40s3uqc', 'template_e1ujt4h', form.current, 'qVEnr5yeaZ8SAnElI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">
        <article className="contact__option">
        <RiMailLine className='contact__option-icon'/>
        <h4>Email</h4>
        <h5 className='contact__option-details'>nabil16497@gmail.com</h5>
        <a href="mailto:nabil16497@gmail.com" className="" target='_blank'>Send a message</a>  
        </article>


        <article className="contact__option">
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5 className='contact__option-details'>nabil164</h5>
        <a href="https://m.me/nabil164" className="" target='_blank'>Send a message</a>  
        </article>


        <article className="contact__option">
        <RiWhatsappLine className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5 className='contact__option-details'>+8801629528448</h5>
        <a href="https://api.whatsapp.com/send?phone=+8801629528448" className="" target='_blank'>Send a message</a>  
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Yout Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>


      </div>
    </section>
  )
}

export default Contact