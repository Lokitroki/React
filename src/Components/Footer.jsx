import React from 'react'
import redes from './Footer.module.css'
import { SocialIcon } from 'react-social-icons';
import { Container } from 'react-bootstrap';
import logo from "../assets/recursos/logoUniversae.png"


const Footer = () => {
  return (
    <footer>
      <Container className={redes.redes}>
        <SocialIcon className={redes.icons} url='https://www.facebook.com/UNIVERSAE/'/>
        <SocialIcon className={redes.icons} url='https://www.instagram.com/_universae/?hl=es'/>
        <SocialIcon className={redes.icons} url='https://www.youtube.com/c/UNIVERSAE_FP'/>
        <SocialIcon className={redes.icons} url='https://www.twitch.tv/?lang=es-ES'/>
        <SocialIcon className={redes.icons} url='https://www.linkedin.com/school/universae'/>
        <SocialIcon className={redes.icons} url='https://www.tiktok.com/@_universae'/>
        <SocialIcon className={redes.icons} url='https://twitter.com/_Universae'/>
        <a href="https://universae.com/" target="_blank"><img src={logo} alt="logo" className={redes.logoUniversae}/></a>
      </Container>
    </footer>
  )
}

export default Footer