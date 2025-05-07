import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import './HandleContact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
  
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        name,
        email,
        title: subject,
        message
      },
      import.meta.env.VITE_PUBLIC_KEY
    ).then((result) => {
      setSending(false);
      setSent(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setSent(false), 5000);
    }).catch((error) => {
      console.error('Erreur EmailJS :', error);
      setSending(false);
    });
  };
  

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact</h1>
        <p className="intro-text">
          Vous avez un projet ou une question? N'hésitez pas à me contacter.
        </p>

        {/*INFORMATION MESSAGE BLOCK*/}
        <div className="contact-grid">
          <div className="info-column">
            <div className="info-card">
              <h2>Informations</h2>
              <div className="info-item">
                <h3>Email</h3>
                <a href="mailto:hugobessaa7@gmail.com">hugobessaa7@gmail.com</a>
              </div>
              <div className="info-item">
                <h3>Localisation</h3>
                <p>France</p>
              </div>
            </div>
            
            <div className="socials-card">
              <h2 className="socials-card-title">Réseaux</h2>
              <div className="social-icons">
                <a href="https://github.com/shogu7" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/hugo-bessaa-6a5ba62a0/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/*SENDIN MESSAGE BLOCK*/}
          <div className="form-card">
            <h2>Envoyez-moi un message</h2>
            
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={sending}
                className="send-button"
              >
                {sending ? 'Envoi en cours...' : (
                  <>
                    <Send className="send-icon" />
                    Envoyer
                  </>
                )}
              </button>
              
              {sent && (
                <div className="success-message">
                  Votre message a bien été envoyé. Je vous répondrai dès que possible.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}