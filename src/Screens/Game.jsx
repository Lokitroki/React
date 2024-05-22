import React from 'react'
import styles from './Game.module.css'
import {Table} from 'react-bootstrap';

const Game = ({title, images}) => {
  return (
    <div>
      <div class={styles.iframeConteiner}>
        <iframe class="juego" scrolling="no" allowfullscreen="" frameborder="0" src="https://html-classic.itch.zone/html/8561483/index.html"></iframe>
      </div>
      <div className={styles.content}>
      <div class={styles.content_txt}>
          <h2>{title}</h2>
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
          {images.map((image) => (
                 <img
                   src={image.path}
                   alt=""
               />
              ))}
        </div>
      </div>
    </div>
  )
}

export default Game