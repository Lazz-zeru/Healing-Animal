import './OurValues.css'

function OurValues(){
    return(
        <>
            <div className="ma-container-section3">
                <div className="ma-tittle-section3">
                    <p>Nuestros Valores</p>
                </div>
                <div className="ma-carts-section3">
                    <div className="ma-cart-values">
                        <div className="ma-logo-carts">
                            <p>🌱</p>
                        </div>
                        <div className="ma-text-carts">
                            <h2>Naturalidad</h2>
                            <p>
                                Usamos solo 
                                ingredientes naturales 
                                en todos nuestros 
                                productos.
                            </p>
                        </div>
                    </div>
                    <div className="ma-cart-values">
                        <div className="ma-logo-carts">
                            <p>🐾</p>
                        </div>
                        <div className="ma-text-carts">
                            <h2>Respeto Animal</h2>
                            <p>
                                Nuestros productos 
                                nunca son probados en 
                                animales.
                            </p>
                        </div>
                    </div>
                    <div  className="ma-cart-values">
                        <div className="ma-logo-carts">
                            <p>♻️</p>
                        </div>
                        <div className="ma-text-carts">
                            <h2>Sostenibilidad</h2>
                            <p>
                                Comprometidos con
                                prácticas sostenibles y 
                                empaques eco-amigables.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurValues