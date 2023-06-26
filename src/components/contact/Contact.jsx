import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className='container section contact__container'>
      <div className='contact__title'>// Contact</div>

      {/* TODO: for now we keep this as a direct mail link, but eventually have a built in contact system */}

      {/* <div className='contact__card'>
        <div className='contact__card__title'>Email</div>
        <input className='contact__card__input'></input>
        <div className='contact__card__title'>Message</div>
        <textarea className='contact__card__textarea'></textarea>
      </div> */}
      <a href='mailto:info@example.com'>Email me</a>
    </div>
  );
}

export default Contact;
