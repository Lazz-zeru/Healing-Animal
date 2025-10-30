import './Products.css'
import buy from '../../assets/buy.png'
import { products } from '../Section4/Filter'

function Products() {
    return (
        <div>
            <div className='ma-products-section4'>
                {
                    products.map((product) => (
                        <div key={product.id}>
                            <div className='ma-img-preducts'
                                style={{
                                    backgroundImage: `url(${product.image})`,
                                    backgroundColor: 'red',
                                    backgroundPosition: 'top center',
                                    backgroundSize: 'cover'
                                }}>

                                <p className='ma-target-product' style={{ backgroundColor: product.target != undefined ? 'var(--color-buttons)' : 'transparent' }}>{product.target}</p>

                            </div>
                            <div className='ma-info-products'>
                                <div className='ma-text-product'>
                                    <h2>{product.tittle}</h2>
                                    <p>{product.text}</p>
                                </div>
                                <div className='ma-buy-product'>
                                    <p>{product.price}</p>
                                    <div className='ma-buttons-products'>
                                        <img src={buy} width={'20px'} height={'20px'} />
                                        <p>Comprar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='ma-button-see-products'>
                <button>Ver Todos los productos</button>
            </div>
        </div>
    )
}
export default Products