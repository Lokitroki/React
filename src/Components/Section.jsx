import React from 'react'
import images from '../assets/images.jsx'
import styles from './Section.module.css';
import {Link} from 'react-router-dom'

const section = () => {
  return (
      <div className={styles.image}>
        <Link to='/game0'><img src={images.img0}/></Link>
        <Link to='/game1'><img src={images.img1}/></Link>
        <Link to='/game2'><img src={images.img2}/></Link>
        <Link to='/game3'><img src={images.img3}/></Link>
        <Link to='/game4'><img src={images.img4}/></Link>
        <Link to='/game5'><img src={images.img5}/></Link>
      </div>
  )
}

export default section