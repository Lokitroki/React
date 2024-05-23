import { useState } from 'react'
import './App.css'
import Section from './Components/Section'
import Footer from './Components/Footer'
import Game from './Screens/Game'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import {imagesGame0, imagesGame1,  imagesGame2, imagesGame3, imagesGame4, imagesGame5} from './assets/imagesGame'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Section/>}/>
          <Route path='/Game0' element={<Game title="Rescate en ascensor" images={imagesGame0}/>}/>
          <Route path='/Game1' element={<Game title="Embarque y desembarque en helicoptero" images={imagesGame1}/>}/>
          <Route path='/Game2' element={<Game title="Tipología y características de los EPIs" images={imagesGame2}/>}/>
          <Route path='/Game3' element={<Game title="Protocolo ante una hemorragia externa" images={imagesGame3}/>}/>
          <Route path='/Game4' element={<Game title="Maniobras de extinción según la instalación" images={imagesGame4}/>}/>
          <Route path='/Game5' element={<Game title="Señalización a helicóptero desde tierra" images={imagesGame5}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div> 
  )
}

export default App
