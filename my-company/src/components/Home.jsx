function Home() {
    const styles = {
      container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      },
      heading: {
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '20px',
        textTransform: 'uppercase'
      },
      paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#34495e',
        marginBottom: '30px'
      }
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to Our Company</h1>
        <p style={styles.paragraph}>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }
  
  export default Home;