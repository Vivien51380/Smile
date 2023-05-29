import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer__container">
    <div className="footer__links">
      <div className="footer__link--wrapper">
        <div className="footer__link--items">
          <h2>A propos</h2>
          <a href="/sign__up">Comment louer ?</a>
        </div>
      </div>
      <div className="footer__link--wrapper">
        <div className="footer__link--items">
          <h2>Nos Réseaux Sociaux</h2>
          <a href="/">Instagram</a> <a href="/">Facebook</a>
          <a href="/">Youtube</a> <a href="/">Twitter</a>
        </div>
      </div>
    </div>
    <section className="social__media">
      <div className="social__media--wrap">
        <div className="footer__logo">
          <a href="/" id="footer__logo">SMILE</a>
        </div>
        <p className="website__rights">© SMILE 2023. Tout Droits Réservés</p>
        <div className="social__icons">
          <a href="/" className="social__icon--link" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" className="social__icon--link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="social__icon--link">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Footer;
