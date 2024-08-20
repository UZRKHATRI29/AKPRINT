import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <footer className = "footer">
            <div className="footer-links">
               <a href="/">Home</a> | <a href="/">Products</a> | <a href="/">About</a> | <a href="/">Contact</a>
            </div>
            <div className="social-lins">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>    
            <p>&copy; 2024 AK Print Solution. All Rights reserved</p>
        </footer>
    )
}

export default Footer;