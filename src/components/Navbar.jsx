import './Navbar.css';

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const contactMenu = document.querySelector('#contact-page');
  let scrollPos = window.scrollY;

  // adds 'highlight' class to menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar__container">
          <a href="#home" id="navbar__logo"><img src="../../public/logo_smile.png" alt="logo" /></a>
          <div className="navbar__toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="navbar__menu">
            <li className="navbar__item">
              <a href="#home" className="navbar__links" id="home-page">Accueil</a>
            </li>
            <li className="navbar__item">
              <a href="#about" className="navbar__links" id="about-page">À propos</a>
            </li>
            <li className="navbar__item">
              <a href="#services" className="navbar__links" id="services-page">Services</a>
            </li>
            <li className="navbar__item">
              <a href="#contact" className="button" id="contact-page">Nous contacter</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  export default Navbar;