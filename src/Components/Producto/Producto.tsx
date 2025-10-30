import './Producto.css'

function Producto() {
    return (
        <div className='ha_contenedor_producto'>
            <h1>Nuestro Producto</h1>

            <div className='ha_contenedor_producto_img'>
                <div className='ha_contenedor_precio_producto'>
                    <div className='ha_desplegable_producto'>
                        <p>$15.000</p>
                        <p>Ver más</p>
                    </div>
                </div>
            </div>

            <div className='ha_contenedor_producto_text'>
                <p>
                    PCT Moisturizer es una crema cuidadosamente formulada con ingredientes naturales, destacando la miel como su componente principal. Diseñada especialmente para perros y gatos,
                    esta crema previene y trata eficazmente la resequedad en la nariz y almohadillas, devolviendo hidratación y confort a las zonas más delicadas de tus mascotas. Además,
                    PCT Moisturizer ayuda a aliviar quemaduras de primer grado causadas por la exposición solar, promoviendo una rápida recuperación y bienestar.
                </p>
                <p>
                    Con PCT Moisturizer, cuidas a tus mascotas con la fuerza de la naturaleza y el respaldo de una fórmula pensada para proteger y sanar.
                </p>
            </div>
        </div>
    )
}

export default Producto