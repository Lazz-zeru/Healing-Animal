import './NavigationBar.css'
import Logo from '../../assets/Logo.png'


function NavigationBar() {
    return (
        <>
            <nav className='ma-nav'>
                <div className='ma-nav-logo'>
                    {/* <div style={{width: '48px', height: '48px', backgroundColor: 'blue'}}></div> */}
                    <img src={Logo} width={'48px'} height={'48px'} />
                    <p>Healing Animals</p>
                </div>
                <div className='ma-links'>
                    <a href='#whoWeAre'>
                        <p>Quiénes Somos</p>
                    </a>
                </div>
                <div className='ma-links'>
                    <p>Productos</p>
                </div>
                <div className='ma-links'>
                    <p>Contactanos</p>
                </div>
                <div>
                    <button className='ma-button-sell'>Comprar Ahora</button>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar