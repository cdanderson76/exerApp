import { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
};

export default function AuthAppContext({ children }) {

  const [ user, setUser ] = useState(null);

  function login(user) {
    setUser(user);
  };

  function logout() {
    setUser(null);
  }

  console.log(`AuthContext state: ${user}`);

  return (

    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}