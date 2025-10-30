import './Header.css';
import check from '../../assets/check.png'
import prod1 from '../../assets/perro.jpg';
import prod2 from '../../assets/Miel.png';
import prod3 from '../../assets/gato.jpg';

function Header() {
    return (
        <>
            <header className="ma-content-header">
                <div className='ma-header'>
                    <div className='ma-text-header'>
                        <div className='ma-label-header'>
                            <p>Cuidado Natural para Animales</p>
                        </div>
                        <div className='ma-name-header'>
                            <p>Healing</p>
                            <p>Animals</p>
                        </div>
                        <div className='ma-description-header'>
                            <p>Productos naturales a base de miel para el bienestar y la salud de tus animales</p>
                        </div>
                        <div className='ma-buttons-header'>
                            <button>Ver Productos</button>
                            <button>Contáctanos</button>
                        </div>
                        <div className='ma-points-checked-header'>
                            <img src={check} width={'33px'} height={'33px'} />
                            <p>100% Natural</p>
                            <img src={check} width={'33px'} height={'33px'} />
                            <p>Aprobado por Véterinarios</p>
                            <img src={check} width={'33px'} height={'33px'} />
                            <p>Envio Gratuito</p>
                        </div>
                    </div>
                    <div className='ma-container-img-header'>
                        <div className='ma-img-header'>
                            <div className='ma-medium-img'>
                                <img src={prod3} width={'192px'} height={'192px'} />
                            </div>
                            <div className='ma-large-img'>
                                <img src={prod2} width={'350px'} height={'320px'} />
                            </div>
                            <div className='ma-small-img'>
                                <img src={prod1} width={'128px'} height={'128px'} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header