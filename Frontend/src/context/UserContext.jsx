// UserContext.jsx
import React, { useState, createContext } from 'react';

// ✅ Context object (should be PascalCase or camelCase)
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    FullName: { firstname: '', lastname: '' },
    email: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
