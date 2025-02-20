// src/components/UserProfile.jsx
function UserProfile(props) {
    return (
        <div style={{ 
            border: '1px solid gray',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px',
            backgroundColor: '#f8f9fa',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ 
                color: '#2c3e50',
                marginBottom: '15px',
                fontSize: '1.8em'
            }}>{props.name}</h2>
            <p style={{ fontSize: '1.1em' }}>
                Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
            </p>
            <p style={{ 
                fontSize: '1.1em',
                color: '#555',
                lineHeight: '1.4'
            }}>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;