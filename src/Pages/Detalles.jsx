import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getById, getDescriptionById } from "../Services/ArticuloServices";


let Detalles=()=>{
    const {id} = useParams();
    let [detalle, setDetalle] = useState({})
    console.log("params-id", id);

    useEffect(()=>{
        const request = async ()=>{
            try {
                const responseById = await getById(id)
                const reDescripcion = await getDescriptionById(id)

                setDetalle({ ...responseById, description: reDescripcion.plain_text})
                
            } catch (error) {
                console.log("Error", error);
            }
        }
        request();
    }, [id])

    return(
        <div>
            <h2>Descripcion del Articulo</h2>

            <p>{detalle.description}</p>
        </div>
    )
};

export default Detalles;