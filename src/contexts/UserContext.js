import { createContext, useContext } from 'react';

// first I create a UserContext
export const UserContext = createContext();

// I then create a custom hook to consume the context for two reasons
// 1) To make it easier to let components consume it (dryer)
// 2) To allow custom error message if a component not wrapped in provider tries to access context

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider!');
  }
  return context;
}

// In terms or providing the context, in order to avoid defining the user state in app.jsx (SOC!)
// I prefer to create a custom wrappre component UserProvider. It uses children and all this component does
// is to render what's passed from main.jsx wrapped in the provider with the context value passed down.
// Howevre because of Vite Fast Refresh rule I can't do it here as I wouldnt be able to export it
// as I would be exporting both a component and a non-component so I split into a sepearate file
