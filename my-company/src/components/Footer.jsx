function App() {
    const styles = {
      footer: {
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '1.5rem',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      },
      container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        margin: 0,
        fontSize: '1rem',
        letterSpacing: '0.5px'
      }
    };
  
    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={styles.text}>© 2025 Our Company. All rights reserved.</p>
        </div>
      </footer>
    );
  }