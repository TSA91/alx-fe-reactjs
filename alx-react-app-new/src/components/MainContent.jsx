// src/components/MainContent.jsx
function MainContent() {
    return (
        <main style={{
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <p style={{
                fontSize: '1.2em',
                lineHeight: '1.6',
                color: '#333',
                textAlign: 'center'
            }}>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;