import React from 'react'
import { Routes } from '../Components/Routes';
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';

function NavigationButtons() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const currentIndex = Routes.findIndex(route => route.path === location.pathname);
  
    const goBack = () => {
      if (currentIndex > 0) {
        navigate(Routes[currentIndex - 1].path);
      }
    };
  
    const goForward = () => {
      if (currentIndex < Routes.length - 1) {
        navigate(Routes[currentIndex + 1].path);
      }
    };
  
    return (
      <div>
        <Button variant="primary" size="sm" onClick={goBack} disabled={currentIndex <= 0}> Juego anterior </Button>{' '}
        <Button variant="primary" size="sm" onClick={goForward} disabled={currentIndex >= Routes.length - 1}> Juego siguiente </Button>
      </div>
    );
  }
  
  export default NavigationButtons;