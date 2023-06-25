import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className='contact__container'>
      <div className='contact__title'>// Contact</div>

      <div className='contact__card'>
        <div className='contact__card__title'>Email</div>
        <input className='contact__card__input'></input>
        <div className='contact__card__title'>Message</div>
        <textarea className='contact__card__textarea'></textarea>
      </div>
    </div>
  );
}

export default Contact;
