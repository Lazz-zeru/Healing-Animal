import './Tarjeta.css';
import left from '../../assets/left.png';
import right from '../../assets/rigth.png'; // ojo, revisa si se llama "right" o "rigth"
import tarjeta1 from '../../assets/tarjeta1.jpg';
import tarjeta2 from '../../assets/tarjeta2.jpg';
import { useState } from 'react';

function Tarjeta() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [tarjeta1, tarjeta2];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="ma-tarjeta-container">
      <button className="ma-arrow-button-tarjeta ma-left" onClick={handlePrev}>
        <img src={left} alt="Anterior"/>
      </button>

      <div className="ma-image-container-tarjeta">
        <img src={images[currentIndex]} alt={`tarjeta ${currentIndex + 1}`} />
      </div>

      <button className="ma-arrow-button-tarjeta ma-right" onClick={handleNext}>
        <img src={right} alt="Siguiente"/>
      </button>
    </div>
  );
}

export default Tarjeta;
