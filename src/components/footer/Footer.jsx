import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className='footer__container'>
        <div className='footer__column__container'>
          <div className='footer__name__container'>
            <div className='footer__name'>Miles Oncken</div>
            <div></div>
          </div>
          <div className='footer__more__container'>
            <div className='footer__name'>Projects</div>
            <div></div>
          </div>
          <div className='footer__contact__container'>
            <div className='footer__name'>Contact</div>
            <div>milesoncken@gmail.com</div>
          </div>
        </div>

        <div className='footer__copyright'>
          ©2023 Miles Oncken | All rights reserved
        </div>
      </div>
    </>
  );
}

export default Footer;
