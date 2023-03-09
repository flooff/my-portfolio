import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';



const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/florian-dillenschneider-3453a5199/" style={{margin:0, padding:0}}>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/flooff" style={{margin:0, padding:0}}>
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/floriandillenschneider/?hl=en" style={{margin:0, padding:0}}>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;