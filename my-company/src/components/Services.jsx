function Services() {
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
        marginBottom: '30px',
        textAlign: 'center'
      },
      list: {
        listStyle: 'none',
        padding: '0',
        margin: '0'
      },
      listItem: {
        padding: '15px',
        margin: '10px 0',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        color: '#34495e',
        fontSize: '1.1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }
    };
  
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Services</h1>
        <ul style={styles.list}>
          <li style={styles.listItem}>Technology Consulting</li>
          <li style={styles.listItem}>Market Analysis</li>
          <li style={styles.listItem}>Product Development</li>
        </ul>
      </div>
    );
  }
  
  export default Services;