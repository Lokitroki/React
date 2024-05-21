import React from 'react'
import redes from './Footer.module.css'


const Footer = () => {
  return (
    <footer>
        <div className={redes.socialMedia}>
            <a href="https://www.facebook.com/UNIVERSAE/" target="_blank"><i class="fa fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/_universae/?hl=es" target="_blank"><i class="fa fa-instagram"></i></a>
            <a href="https://www.youtube.com/c/UNIVERSAE_FP" target="_blank"><i class="fa fa-youtube-play"></i></a>
            <a href="https://www.youtube.com/c/UNIVERSAE_FP" target="_blank"><i class="fa fa-twitch"></i></a>
            <a href="https://www.linkedin.com/school/universae" target="_blank"><i class="fa fa-linkedin-square"></i></a>
            <a href="https://www.tiktok.com/@_universae" target="_blank"><i class="fa fa-telegram"></i></a>
            <a href="https://twitter.com/_Universae" target="_blank"><i class="fa fa-twitter"></i></a>
            <a href="https://universae.com" target="_blank"><i class="fa fa-google"></i></a>
        </div>
    </footer>
  )
}

export default Footer