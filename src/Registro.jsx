const Registro=()=>{
    return(
        <form action="">
            <h2>Registro de Usuario</h2>
            
            <div>
                <label>Nombre</label>
                <input type="text" />
            </div>

            <br />

            <div>
                <label>Apellido</label>
                <input type="text" />
            </div>
            
            <br />

            <div>
                <label>Telefono</label>
                <input type="text" />
            </div>

            <br />

            <div>
                <label>Email</label>
                <input type="email" />
            </div>
            
            <br />

            <div>
                <label>Contraseña</label>
                <input type="password" />
            </div>

            <br />

            <div>
                <label>Confirmar Contraseña</label>
                <input type="password" />
            </div>

            <br />

            <button type="submit">Registrarme</button>

        </form>
    )
}
export default Registro;