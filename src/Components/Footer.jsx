import React from 'react'
import redes from './Footer.module.css'
import { SocialIcon } from 'react-social-icons';
import { Container } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer>
      <Container className={redes.redes}>
        <SocialIcon className={redes.icons} url='https://www.facebook.com/UNIVERSAE/'/>
        <SocialIcon className={redes.icons} url='https://www.instagram.com/_universae/?hl=es'/>
        <SocialIcon className={redes.icons} url='https://www.youtube.com/c/UNIVERSAE_FP'/>
        <SocialIcon className={redes.icons} url='https://www.youtube.com/c/UNIVERSAE_FP'/>
        <SocialIcon className={redes.icons} url='https://www.linkedin.com/school/universae'/>
        <SocialIcon className={redes.icons} url='https://www.tiktok.com/@_universae'/>
        <SocialIcon className={redes.icons} url='https://twitter.com/_Universae'/>
        <SocialIcon className={redes.icons} url='https://universae.com'/>
      </Container>
    </footer>
  )
}

export default Footer