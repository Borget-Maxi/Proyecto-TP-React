import { Link } from "react-router-dom";


const PrintArticulo=({id, title, price, thumbnail, available_quantity, thumbnail_id})=>{
    return(
        <div>
            <img src={thumbnail} />
            <p>{title}</p>
            <p>Precio: {"$" + price}</p>
            <p>Stock: {available_quantity}</p>
            <p>Codigo: {thumbnail_id}</p>


            <button>
                <Link to={`/articulo/${id}`}>Ver Detalles</Link>
            </button>
            
            <br /><br />
        </div>
    )
};

export default PrintArticulo;