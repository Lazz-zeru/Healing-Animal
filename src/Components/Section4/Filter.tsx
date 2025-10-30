import './Filter.css'
import viga from '../../assets/vig.png'
import { useRef, useState } from 'react'
import img from '../../assets/prod1.jpg'

export const products = [
    {
        id: 1,
        tittle: 'Pet Moisturizing',
        text: 'Crema natural con miel para perros y gatos que hidrata y repara nariz y almohadillas, aliviando resequedad y quemaduras leves para un mayor confort y bienestar.',
        image: img,
        price: '15.000$',
        target: 'nuevo'
    },
]

interface FilterProps {
  onSelect: (value: string) => void;
}

function Filter({ onSelect }: FilterProps) {
  const [selected, setSelected] = useState<string | null>(null)

  // Referencias a los radios
  const refRadio1 = useRef<HTMLInputElement>(null)
  const refRadio2 = useRef<HTMLInputElement>(null)
  const refRadio3 = useRef<HTMLInputElement>(null)

  // ✅ Solución recomendada → permitir `null` en el tipo RefObject
  function handleRadio(ref: React.RefObject<HTMLInputElement | null>, value: string) {
    if (ref.current) {
      ref.current.checked = true
      setSelected(value)
      onSelect(value) // Notifica al Dashboard qué filtro se seleccionó
    }
  }

  // Cambia el estilo visual según la opción activa
  const getStyle = (value: string) => ({
    backgroundColor: selected === value ? 'var(--color-buttons)' : '#fff',
    color: selected === value ? '#fff' : '#000',
    transition: '0.3s all',
    cursor: 'pointer'
  })

  return (
    <div>
      <div className="ma-text-section4">
        <img src={viga} height={'10px'} alt="Decoración" />
        <h1>Nuestros Productos</h1>
        <p>Descubre nuestra línea de productos naturales elaborados con miel de la más alta calidad, 
          diseñados específicamente para mejorar la salud y bienestar de tus animales.</p>
      </div>

      <form className='ma-filter-section4'>
        <div onClick={() => handleRadio(refRadio1, "Producto")} style={getStyle('Producto')}>
          <input type='radio' ref={refRadio1} name='filter_products' hidden />
          <p>Producto</p>
        </div>

        <div onClick={() => handleRadio(refRadio2, "Folleto")} style={getStyle('Folleto')}>
          <input type='radio' ref={refRadio2} name='filter_products' hidden />
          <p>Folleto</p>
        </div>

        <div onClick={() => handleRadio(refRadio3, "Tarjeta")} style={getStyle('Tarjeta')}>
          <input type='radio' ref={refRadio3} name='filter_products' hidden />
          <p>Tarjeta</p>
        </div>
      </form>
    </div>
  )
}

export default Filter
