// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  const styles = {
    nav: {
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      marginBottom: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem'
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.1rem',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      transition: 'background-color 0.3s'
    },
    activeLink: {
      backgroundColor: '#34495e'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;