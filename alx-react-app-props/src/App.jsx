// src/App.jsx
import { useState } from 'react'
import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'
import './App.css'

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;