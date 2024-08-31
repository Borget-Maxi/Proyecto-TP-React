import { useEffect, useState } from "react";
import { getAll } from "./Services/ArticuloServices";
import PrintArticulo from "./PrintArticulo";




const Articulo=()=>{
    const [Articulo, setArticulo] = useState([]);

    useEffect(()=>{
        const request=async()=>{
            try {
                const info = await getAll()
                console.log("response info del Articulo", info);
                setArticulo(info.results)
            } catch (error) {
                console.log("Error", error);
            }
        };
        request();
    },[]);

    return(
        <div>
            <h1>Lista de Articulos</h1>
            {Articulo.map((propiedad)=>(
                <PrintArticulo 
                thumbnail={propiedad.thumbnail}
                title={propiedad.title}
                price={propiedad.price}
                available_quantity={propiedad.available_quantity}
                thumbnail_id={propiedad.thumbnail_id}
                id={propiedad.id}
                />
            ))}
        </div>
    )
}

export default Articulo;