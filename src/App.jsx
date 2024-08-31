import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Navbar';
import Home from './Pages/Home';
import Detalles from './Pages/Detalles';
import Registro from './Registro';
import Login from './Login';


function App() {


  return (
    <>
      <Router>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/articulo/:id" element={<Detalles />}/>
          <Route path="/registro" element={<Registro />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
