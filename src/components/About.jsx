import './About.css';

function About() {
    return (
      <div className="main" id="about">
        <div className="main__container">
          <div className="main__img--container">
            {/* <div className="main__img--card"><FontAwesomeIcon icon={faLayerGroup} /></div> */}
          </div>
          <div className="main__content">
            <h1>Chez <span>Smile</span>, nous proposons des bornes à selfie de haute qualité pour tous vos événements, qu'il s'agisse de mariages, d'anniversaires, de fêtes d'entreprise ou de tout autre événement spécial. </h1>
            <h2>Nos bornes à selfie sont équipées des dernières technologies pour que vos invités puissent capturer leurs sourires et les imprimés instantanément. </h2>
            <p>Louez une borne à selfie dès aujourd'hui et créez des souvenirs inoubliables !</p>
            <button className="main__btn"><a href="#services">Nos forfaits</a></button>
          </div>
        </div>
      </div>
    );
  }

  export default About;