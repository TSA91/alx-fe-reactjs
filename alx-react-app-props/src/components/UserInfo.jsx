// src/components/UserInfo.jsx
import UserDetails from './UserDetails'

function UserInfo() {
  return (
    <div style={{ 
      padding: '15px',
      backgroundColor: 'white',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <UserDetails />
    </div>
  );
}

export default UserInfo;