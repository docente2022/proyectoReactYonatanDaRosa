import React from "react";



const PiePagina= ()=>{
    return (
        <footer>
          <div className="footer-column">
            <p className="rights">© 2023 Todos los derechos reservados</p>
          </div>
          <div className="footer-column">
            <p className="contact">Contacto: info@tudominio.com</p>
          </div>
          <div className="footer-column">
            <p className="share">Síguenos en:</p>
            <div className="social-links">
              <a href="/" className="social-link">Facebook</a>
              <a href="/" className="social-link">Twitter</a>
              <a href="/" className="social-link">Instagram</a>
            </div>
          </div>
        </footer>
      );
    }
export default PiePagina