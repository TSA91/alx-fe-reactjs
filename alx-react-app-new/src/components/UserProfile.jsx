// src/components/UserProfile.jsx
function UserProfile(props) {
    return (
        <div style={{ 
            border: '1px solid gray', 
            padding: '10px', 
            margin: '10px',
            borderRadius: '5px'
        }}>
            <h2 style={{ 
                color: 'blue',
                fontSize: '24px',
                marginBottom: '10px'
            }}>{props.name}</h2>
            <p style={{ 
                fontSize: '16px',
                margin: '5px 0'
            }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ 
                fontSize: '16px',
                margin: '5px 0'
            }}>Bio: <span style={{ color: '#666' }}>{props.bio}</span></p>
        </div>
    );
}

export default UserProfile;