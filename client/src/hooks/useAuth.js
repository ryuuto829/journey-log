import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { checkRefreshToken } from '../api/user';

const UserContext = createContext(null);

// Create and handle user state
const useAuthProvider = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await checkRefreshToken();
        console.log(response);
        setUser(response);

      } catch (err) {
        console.log(err);
        setUser(null);
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  return { user, setUser, loading };
};

// Provider component that wraps app and pass auth object to the context
const UserProvider = ({ children }) => {
  const auth = useAuthProvider();

  return (
    <UserContext.Provider value={auth}>
      {children}
    </UserContext.Provider>
  );
};

// Get auth object from the child component
const useAuth = () => useContext(UserContext);

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useAuth, UserProvider };