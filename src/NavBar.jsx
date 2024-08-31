import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>

                <li>
                    <Link to="/registro">REGISTRO</Link>
                </li>

                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>    
        
        </nav>
    </>
);
};

export default NavBar;