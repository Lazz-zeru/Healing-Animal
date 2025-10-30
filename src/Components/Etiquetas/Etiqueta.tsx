import './Etiqueta.css'


interface propsEtiqueta{
    title: string
    text: string
}

function Etiqueta(prop:propsEtiqueta){
    return(
        <div className="ha_contenedor_mision">
            <h1>{prop.title}</h1>
            <p>{prop.text}</p>
        </div>
    )
}

export default Etiqueta