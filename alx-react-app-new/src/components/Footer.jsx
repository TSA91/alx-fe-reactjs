// src/components/Footer.jsx
function Footer() {
    return (
        <footer style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '15px',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <p style={{
                margin: 0,
                fontSize: '14px'
            }}>© 2023 City Lovers</p>
        </footer>
    );
}

export default Footer;