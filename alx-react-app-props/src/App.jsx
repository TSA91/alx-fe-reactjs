// src/App.jsx
import { useState } from 'react'
import ProfilePage from './components/ProfilePage'
import UserContext from './UserContext'
import './App.css'

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ padding: '20px' }}>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;