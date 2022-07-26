import React from 'react';
import { GoLocation} from 'react-icons/go';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
      <a href="https://www.facebook.com/kajakowawarka" target="_blank" rel="noopener noreferrer">
    <div>
      <FaFacebookF />
    </div>
      </a>
      <a href="https://www.google.com/maps/place/Nowy+Zjazd+4a,+05-660+Warka/@51.7792688,21.1801113,17z/data=!3m1!4b1!4m5!3m4!1s0x4718e736cde18e57:0x60ad231b23cca33!8m2!3d51.7792688!4d21.1823" target="_blank" rel="noopener noreferrer">
    <div>
      <GoLocation />
    </div>
      </a>
  </div>
);

export default SocialMedia;