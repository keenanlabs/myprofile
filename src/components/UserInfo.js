import React, { Component } from 'react'
import youtube from '../images/youtube.svg'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import linkedin from '../images/linkedin.svg'


import me from '../../content/images/me.png'


export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <p>
             I'm Kurniawan, a Specialist Mobile App Publisher Android & iOS
            </p>
            
            <a href="https://www.youtube.com/channel/UCWX9ooxvpj0lqCGYY0XL1CQ"  target="_blank">
              
              {' '}
            <img src={youtube}  className="social-buttons" />
            </a>
            {/* <img src={youtube} className="social-buttons" />
            <a href="https://www.youtube.com/channel/UCWX9ooxvpj0lqCGYY0XL1CQ" className="twitter-follow-button" target="_blank">
              JustApp ID
              {' '}
            
            </a> */}
            
            {/* <img src={twitter} /> */}
            <a href="https://twitter.com/Keenanlabs"  target="_blank">
            <img src={twitter}  className="social-buttons"/>
              {' '}
              </a>
            
              
            <a href="https://www.facebook.com/kennan.rajendra" target="_blank">
            
              <img src={facebook} className="social-buttons" />
              {' '}
            </a>


            <a href="https://www.linkedin.com/in/kurniawan-akhmad/" target="_blank">
            
              <img src={linkedin} className="social-buttons" />
              {' '}
            </a>
          </div>

          <div className="flex-avatar">
            <img className="avatar" src={me} />
          </div>
        </div>
      </aside>
    )
  }
}