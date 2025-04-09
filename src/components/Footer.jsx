import React from 'react'
import { pageLinks, socialLinks } from '../data'

const Footer = () => {
  return (
    <div>
      <footer className="section footer">


        {/* calling the links to the footer */}

      <ul className='footer-links' id='footer-links'>
        {
          pageLinks.map((link)=> {
            return(
              <li key={link.id}>
                <a href={link.href} className='footer-link'>{link.text}</a>

              </li>
            )
          })
        }

        </ul>

        {/* calling the social media icons */}

      <ul className="footer-links">
        {
          socialLinks.map((link) => {
            const { id, href, icon} = link
            return(
              <li key={id}>
                <a href={href} target="_blank" useRef="noreferrer" className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            )
          })
        }
        </ul>

        {/* copyright and date */}
        
      <p className="copyright">
         &copy; {new Date().getFullYear()} GiwusK Tours 
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </div>
  );
}

export default Footer
