import './WhoWeAre.css'
import viga from '../../assets/vig.png'
import prod3 from '../../assets/prod3.jpg';

function WhoWeAre(){
    return(
        <div id='whoWeAre'>
            <div className="ma-text-section1">
                <img src={viga} height={'10px'} />
                <h1>Quiénes Somos</h1>
                <p>Descubre la historia detrás de Healing Animals y nuestra pasión por el bienestar animal</p>
            </div>
            <div className='ma-img-section1'>
                <div className='ma-img-who-we-are'>
                    <img src={prod3}/>
                </div>
                <div className='ma-text-who-we-are'>
                    <h2>Nuestra Historia</h2>
                    <p>
                        En Healing Animals, nos dedicamos a crear 
                        productos naturales a base de miel que 
                        promueven la salud y el bienestar de los 
                        animales. Nuestra historia comenzó hace más de 
                        una década cuando descubrimos las 
                        propiedades curativas de la miel y su aplicación 
                        en el cuidado animal.
                    </p>
                    <p>
                        Desde entonces, hemos perfeccionado nuestras 
                        fórmulas, combinando la sabiduría ancestral con 
                        investigación científica moderna para crear 
                        productos efectivos, seguros y completamente 
                        naturales.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default WhoWeAre