import './Hero.css';

function Hero() {
    return (
      <div className="hero" id="home">
        <div className="hero__container">
          <h1 className="hero__heading">Bienvenue chez <span>Smile</span></h1>
          <p className="hero__description">Des souvenirs inoubliables en un clic</p>
          <button className="main__btn"><a href="#about">À propos</a></button>
        </div>
      </div>
    );
  }

  export default Hero;