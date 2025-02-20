// src/components/ProfilePage.jsx
import UserInfo from './UserInfo'

function ProfilePage() {
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;