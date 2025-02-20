// src/components/Footer.jsx
function Footer() {
    return (
        <footer style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '15px',
            position: 'fixed',
            bottom: 0,
            left: 0,  // Add this
            right: 0, // Add this
            width: '100%',
            display: 'flex',         // Add this
            justifyContent: 'center', // Add this
            alignItems: 'center',     // Add this
            boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
        }}>
            <p style={{ 
                margin: 0, 
                fontSize: '0.9em',
                textAlign: 'center', // Add this to the paragraph
                width: '100%'        // Add this to the paragraph
            }}>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;