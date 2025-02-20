// src/UserContext.js
import { createContext, useContext } from 'react';

// Create the context with a default value
const UserContext = createContext({
  name: '',
  email: ''
});

// Custom hook for using the UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

// Export the context
export default UserContext;