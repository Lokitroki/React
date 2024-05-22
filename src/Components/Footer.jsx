import React from 'react'
import redes from './Footer.module.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div className={redes.socialMedia}>
          <ul>
              <a href="https://www.facebook.com/UNIVERSAE/" target="_blank"><li><FaSquareFacebook/></li></a>
              <a href="https://www.instagram.com/_universae/?hl=es" target="_blank"><li><FaInstagram/></li></a>
              <a href="https://www.youtube.com/c/UNIVERSAE_FP" target="_blank"><li><FaYoutube/></li></a>
              <a href="https://www.youtube.com/c/UNIVERSAE_FP" target="_blank"><li><FaTwitch/></li></a>
              <a href="https://www.linkedin.com/school/universae" target="_blank"><li><FaLinkedin/></li></a>
              <a href="https://www.tiktok.com/@_universae" target="_blank"><li><FaTiktok/></li></a>
              <a href="https://twitter.com/_Universae" target="_blank"><li><FaTwitter/></li></a>
              <a href="https://universae.com" target="_blank"><li><FaGoogle/></li></a>
            </ul>
        </div>
    </footer>
  )
}

export default Footer