import './Footer.css'
import face from '../../assets/face.png'
import insta from '../../assets/ins.png'
import x from '../../assets/x.png'
import ubi from '../../assets/ubi.png'
import tel from '../../assets/tel.png'
import mail from '../../assets/mail.png'
import copy from '../../assets/Copy.png'

function Footer() {
    return (
        <>
            <div className='ma-container-footer'>
                <div className='ma-footer'>
                    <div className='ma-column1-footer'>
                        <h2>Healing Animals</h2>
                        <p>
                            Productos naturales a base de
                            miel para el bienestar animal.
                            Comprometidos con la salud
                            de tus mascotas y animales de
                            granja.
                        </p>
                        <div className='ma-social-footer'>
                            <img src={face} width={'25px'} height={'25px'}/>
                            <img src={insta} width={'25px'} height={'25px'} />
                            <img src={x} width={'25px'} height={'25px'} />
                        </div>
                    </div>
                    <div className='ma-column2-footer'>
                        <h2>Enlaces Rápidos</h2>
                        <a>Quiénes Somos</a>
                        <a>Productos</a>
                        <a>Preguntas Frecuentes</a>
                        <a>Términos y Condiciones</a>
                        <a>Pólitica de Privacidad</a>
                    </div>
                    <div className='ma-column3-footer'>
                        <h2>Contáctanos</h2>
                        <div className='ma-contac-footer'>
                            <img src={ubi} width={'25px'} height={'25px'}  />
                            <p>Kr 6A #191 a21 - Bogotá Colombia</p>
                        </div>
                        <div className='ma-contac-footer'>
                            <img src={tel} width={'25px'} height={'25px'}  />
                            <p>3106354756</p>
                        </div>
                        <div className='ma-contac-footer'>
                            <img src={mail} width={'25px'} height={'25px'}  />
                            <p>healing.animal@gamil.com</p>
                        </div>
                        <form className='ma-inputs-footer'>
                            <input placeholder='Tu Correo Electrónico' />
                            <textarea placeholder='Ingresa tu mensaje' />
                            <button>Enviar Mensaje</button>
                        </form>
                    </div>
                    <div className='ma-copyright-footer'>
                        <hr />
                        <div className='ma-text-copy-footer'>
                            <img src={copy} width={'18px'}/>
                            <p>2025 Healing Animals. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer