import './Folleto.css';
import left from '../../assets/left.png';
import right from '../../assets/rigth.png'; // ojo, revisa si se llama "right" o "rigth"
import folleto1 from '../../assets/folleto1.jpg';
import folleto2 from '../../assets/folleto2.jpg';
import { useState } from 'react';

function Folleto() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [folleto1, folleto2];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="ma-folleto-container">
      <button className="ma-arrow-button ma-left" onClick={handlePrev}>
        <img src={left} alt="Anterior"/>
      </button>

      <div className="ma-image-container">
        <img src={images[currentIndex]} alt={`Folleto ${currentIndex + 1}`} />
      </div>

      <button className="ma-arrow-button ma-right" onClick={handleNext}>
        <img src={right} alt="Siguiente"/>
      </button>
    </div>
  );
}

export default Folleto;
