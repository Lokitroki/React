import React from 'react'
import logo from "../assets/recursos/logo.png"
import styles from "./Header.module.css"


const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
          <a href="https://universae.com/" target="_blank"><img src={logo} alt="logo" /></a>
        </div>
    </div>
  )
}

export default Header