function About() {
    const styles = {
      container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif'
      },
      heading: {
        color: '#2c3e50',
        fontSize: '2.5rem',
        marginBottom: '20px',
        borderBottom: '2px solid #3498db'
      },
      paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#34495e',
        textAlign: 'justify'
      }
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          Our company has been providing top-notch services since 1990. 
          We specialize in various fields including technology, marketing, and consultancy.
        </p>
      </div>
    );
  }
  
  export default About;