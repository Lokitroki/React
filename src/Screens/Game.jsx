import React from 'react'
import styles from './Game.module.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';

const Game = ({title, images}) => {
  return (
    <div>
      <Card className={styles.card}>
        <iframe class="juego" scrolling="no" allowfullscreen="" frameborder="0" src="https://html-classic.itch.zone/html/8561483/index.html"></iframe>
        <Card.Body>
          <h2>{title}</h2>
        </Card.Body>
        <ListGroup className={styles.items}>
          <ListGroup.Item>Grado: Coordinación de emergencias y protección civil.</ListGroup.Item>
          <ListGroup.Item>Asignatura: Gestión de recursos de emergencias y protección civil</ListGroup.Item>
          <ListGroup.Item>Unidad: Planificación y supervisión del mantenimiento de equipos, medios técnicos e instalaciones.</ListGroup.Item>
          <ListGroup.Item>Duración aproximada: 10 minutos.</ListGroup.Item>
          <ListGroup.Item>Dificultad: Fácil.</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Juego anterior</Card.Link>
          <Card.Link href="#">Juego Siguiente</Card.Link>
        </Card.Body>
        <Carousel className={styles.carousel}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image.path} alt={`Imagen ${index + 1}`} />
          </Carousel.Item>
        ))}
        </Carousel>
      </Card>
    </div>
  )
}

export default Game