import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand text-center" href="./inicio">
      <img src="./apple-touch-icon.png" alt="logo" width="100" height="70" class=" pb-2 d-inline-block align-text-top rounded-circle"/>
       GEODA RELOJES 
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/inicio">
            inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/todoslosproductos">
              Todos los productos
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/desplegar"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
        Categoria
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="./relojesMasculinos">
                  Relojes Femeninos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="./relojesFemeninos">
                  Relojes Masculinos
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/relojesUnisex">
                  Relojes Unisex
                </a>
              </li>
            </ul>
          </li>
         
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <i class="bi bi-cart-fill p-4"> 0 </i>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
