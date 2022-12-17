import React from 'react';
import { Link } from 'react-router-dom';
import { FRONT_URL } from "../../helpers/constants"

const Header = () => {
  return (
    <nav className= 'navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <div className='container'>
        <h1>
          <Link to={'/home'} className='text-light'>
            MCGA
          </Link>
        </h1>
      </div>
      <button onClick={logOut} className='btn btn-danger nuevo-post d-block d-md-inline-block'>Cerrar Sesion</button>
    </nav>
  );
};

function logOut(){
  localStorage.removeItem('token')
  localStorage.removeItem('isLogged')
  return window.location.href = `${FRONT_URL}/public/products`
}


export default Header;
