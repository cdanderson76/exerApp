import { useState } from "react";
import { useAuthContext } from "./AuthContext";
import axios from "axios";

export function useSignup() {
  
  const [ error, setError ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  //GET THE LOGIN FUNCTION FROM AUTH CONTEXT
  const { login } = useAuthContext();

  //DEFINE ASYNC SIGNUP FUNCTION
  async function signup(email, password) {

    setIsLoading(true);
    setError(false);

    try {
      const resp = await axios.post(`${import.meta.env.VITE_HOST}/api/user/signup`, { email, password });

      //AXIOS ALREADY PARSES THE DATA, SO WE HAVE TO WRITE IT LIKE THIS:
      const data = resp.data;

      //SAVE USER DATA TO LOCAL STORAGE
      localStorage.setItem('user', JSON.stringify(data));

      //UPDATE AUTH CONTEXT WITH LOGGED IN USER
      login(data);
      setIsLoading(false);
      
    } catch(error) {
      setError(error.response?.data?.error || 'Signup failed');
      setIsLoading(false);
    }
  }
  //EXPOSE SIGNUP FUNCTION AND STATE VALUES
  return { signup, isLoading, error }
}