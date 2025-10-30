import './NavigationBar.css'
import Logo from '../../assets/Logo.png'
import icon from '../../assets/hamburger.png'
import { useState } from 'react'

function NavigationBar() {

    const [barLinkMobile, setBarLinkMobile] = useState(false);

    function handleChange() {
        if(barLinkMobile === true){
            setBarLinkMobile(false)
        }else{
            setBarLinkMobile(true)
        }
    }

    return (
        <div className='ma-nav-bar-container'>
            <nav className='ma-nav'>
                <div className='ma-nav-logo'>
                    {/* <div style={{width: '48px', height: '48px', backgroundColor: 'blue'}}></div> */}
                    <img src={Logo} width={'48px'} height={'48px'} />
                    <p>Healing Animals</p>
                </div>
                <div className='ma-links ma-hidden-link'>
                    <a href='#whoWeAre'>
                        <p>Quiénes Somos</p>
                    </a>
                </div>
                <div className='ma-links ma-hidden-link'>
                    <p>Productos</p>
                </div>
                <div className='ma-links ma-hidden-link'>
                    <p>Contactanos</p>
                </div>
                <div className='ma-hidden-link'>
                    <button className='ma-button-sell'>Comprar Ahora</button>
                </div>
                <div className='ma-icon-links'>
                    <img src={icon} onClick={handleChange} />
                    {
                        barLinkMobile && (
                            <ul className='ma-links-mobile'>
                                <li>
                                    <a href='#whoWeAre'>
                                        <p>Quiénes Somos</p>
                                    </a>
                                </li>
                                <li>
                                    <a href='#whoWeAre'>
                                        <p>Contactanos</p>
                                    </a>
                                </li>
                                <li>
                                    <a href='#whoWeAre'>
                                        <p>Comprar Ahora</p>
                                    </a>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar