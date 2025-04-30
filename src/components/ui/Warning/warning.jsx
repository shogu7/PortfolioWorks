import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './warning.css';

function AlertDismissible() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setMounted(false), 300);
  };

  if (!mounted) return null;

  return (
    <div className={`warning-parent ${visible ? 'show' : 'hide'}`}>
      <Alert variant="success">
        <Alert.Heading>Alerte!👋</Alert.Heading>
        <p>Ce site est actuellement en cours de développement.</p>
        <p>Certaines fonctionnalités peuvent être incomplètes ou instables. Merci !</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleClose} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default AlertDismissible;