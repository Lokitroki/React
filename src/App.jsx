import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Section from './Components/Section'
import Footer from './Components/Footer'
import Game from './Screens/Game'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Section/>}/>
          <Route path='/Game0' element={<Game/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div> 
  )
}

export default App
