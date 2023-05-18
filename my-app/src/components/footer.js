import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <a href="mailto:mhamze2394@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                </a>
                <a href="https://github.com/mhamze23" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/hamze-mohamed-a3375922a/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
            </div>
            <div className="copyright">
                <p>© 2023 Hamze Mohamed</p>
            </div>
        </div>
    );
}
