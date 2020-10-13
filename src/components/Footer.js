import React, { Component } from 'react'

import github from '../../content/thumbnails/github.png'
import facebook from '../../content/thumbnails/facebook.png'
import twitter from '../../content/thumbnails/twitter.png'
import youtube from '../../content/thumbnails/youtube.png'
import linkedin from '../../content/thumbnails/linkedin.png'



export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div>
        <nav className="flex justify-center">
         
         <a
           href="https://www.facebook.com/kennan.rajendra"
           title="Facebook"
           target="_blank"
           rel="noopener noreferrer"
           className="img"
         >
           <img src={facebook} className="footer-img" alt="Facebook" />
         </a>
         <a
           href="https://twitter.com/Keenanlabs"
           title="Twitter"
           target="_blank"
           rel="noopener noreferrer"
           className="img"
         >
           <img src={twitter} className="footer-img" alt="Twitter" />
         </a>
         <a
           href="https://www.linkedin.com/in/kurniawan-akhmad/"
           title="Linkedin"
           target="_blank"
           rel="noopener noreferrer"
           className="img"
         >
           <img src={linkedin} className="footer-img" alt="Linkedin" />
         </a>
         <a
           href="https://www.youtube.com/channel/UCWX9ooxvpj0lqCGYY0XL1CQ"
           title="Youtube"
           target="_blank"
           rel="noopener noreferrer"
           className="img"
         >
           <img src={youtube} className="footer-img" alt="Youtube" />
         </a>
       </nav>
             Built with 💜💜💜 Gatsbyjs
          {/* <strong>Akhmad Ghofarudin Kurniawan</strong>
          {' '}
          /
          {' '}
          <a href="https://twitter.com/keenanlabs" target="_blank">
            Twitter
          </a>
          {' '}
          /
          {' '}
          <a href="https://www.facebook.com/kennan.rajendra" target="_blank">
            Facebook
          </a>
          {' '}
          /
          {' '}
          <a href="https://www.youtube.com/channel/UCWX9ooxvpj0lqCGYY0XL1CQ" target="_blank">
            Youtube
          </a>
          {' '} */}
          
          
        </div>
         
          
          
      </footer>
    )
  }
}