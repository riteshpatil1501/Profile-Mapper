import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ProfileContext = createContext();

// Create a provider component
export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  // Load profiles from localStorage when the app starts
  useEffect(() => {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      setProfiles(JSON.parse(storedProfiles));
    }
  }, []);

  // Save profiles to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }, [profiles]);

  return (
    <ProfileContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </ProfileContext.Provider>
  );
};
