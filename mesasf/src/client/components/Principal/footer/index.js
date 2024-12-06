import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <h3>Síguenos</h3>
          <ul>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="company-info">
          <h3>Acerca de Nosotros</h3>
          <p>
            Somos una empresa líder en la venta de mesas de alta calidad para
            todos tus espacios. Ofrecemos diseños exclusivos y funcionales para
            casas, oficinas y eventos.
          </p>
          <h4>Contacto</h4>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: contacto@empresa.com</p>
          <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Empresa de Mesas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
