import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import TrackVisibility from 'react-on-screen';
import './Contact.css';

function Contact () {
    
    const [buttonText, setButtonText] = useState('Envoyer');
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Pour toutes demandes</h2>
                <h2>Contactez nous !</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                    <input name="nom" type="text" placeholder="Nom" required />
                     
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input name="prenom" type="text" placeholder="Prénom" required />
                     
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input name="email" type="email" placeholder="Adresse mail" required />
                      
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input name="tel" type="text" placeholder="Téléphone*" />
                      
                    </Col>
                    <Col size={12} className="px-1">
                    <textarea name="message" rows="6" placeholder="Message" required />
                      
                      <button type="submit" value="send"><span>{buttonText}</span></button>
                    </Col>
                   
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact;
