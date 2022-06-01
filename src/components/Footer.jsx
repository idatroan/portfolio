import * as React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/globals.css';

const Footer = props => {
    const data = props;

    return (
        <footer>
            <section className='socials'>
                    <a href='https://github.com/idatroan'><FiGithub /></a>
                    <a href='https://www.linkedin.com/in/ida-tr%C3%B8an-34ba3055'><FiLinkedin /></a>
                    <a href='mailto:mail@idatroan.no'><FiMail /></a>
            </section>
            {/* <p>Contact me through my socials.</p> */}
            <p className='copyright'>2022 © Ida Trøan</p>
        </footer>
    )
}

export default Footer;