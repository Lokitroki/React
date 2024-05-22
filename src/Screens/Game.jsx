import React from 'react'
import imagesGame from '../assets/imagesGame.jsx'
import styles from './Game.module.css'
import { Table } from 'react-bootstrap'

const Game = () => {
  return (
    <div>
      <div class={styles.iframeConteiner}>
        <iframe class="juego" scrolling="no" allowfullscreen="" frameborder="0" src="https://html-classic.itch.zone/html/8561483/index.html"></iframe>
      </div>
      <div className={styles.content}>
      <div class={styles.content_txt}>
          <h2>Mantenimiento de los equipos y herramientas de extinción de incendios forestales.</h2>
          <p>En un campo de prácticas sumido en el desorden y la confusión tienes que encontrar tienes que encontrar y colocar las partes de los EPIs utilizados en la extinción de incendios forestales.</p>
          <Table>
            <tr>
              <td>Grado: Coordinación de emergencias y protección civil.</td>
              <td>Asignatura: Gestión de recursos de emergencias y protección civil</td>
              <td>Unidad: Planificación y supervisión del mantenimiento de equipos, medios técnicos e instalaciones.</td>
              <td>Duración aproximada: 10 minutos.</td>
              <td>Dificultad: Fácil.</td>
            </tr>
          </Table>
        </div>
        <div class={styles.content_image}>
          <img src={imagesGame.a0}/>
          <img src={imagesGame.a1}/>
          <img src={imagesGame.a2}/>
          <img src={imagesGame.a3}/>
          <img src={imagesGame.a4}/>
        </div>
      </div>
    </div>
  )
}

export default Game