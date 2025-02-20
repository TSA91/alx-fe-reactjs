// src/components/UserDetails.jsx
import { useContext } from 'react'
import UserContext from '../UserContext'

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      padding: '10px'
    }}>
      <p style={{
        fontSize: '18px',
        color: '#333',
        marginBottom: '10px'
      }}>Name: {userData.name}</p>
      <p style={{
        fontSize: '16px',
        color: '#666'
      }}>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;