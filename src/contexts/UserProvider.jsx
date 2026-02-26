import { useState } from 'react';
import { UserContext } from './UserContext';

// Instea of defining the context value in app.jsx I prefer to create
// this seperate  custom wrappre component UserProvider. It uses children and all this component does
// is to render what's passed from app.jsx wrapped in the provider with the context value passed down.

export function UserProvider({ children }) {
  // I define user as state as eventually it will need to be one (instead of const)
  const [user, setUser] = useState('tickle122');
  // {{ user, setUser }} > first brace is to acces js, second brace is to create an object with shorthand
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
