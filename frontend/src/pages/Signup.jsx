import { useState } from "react";

export default function Signup() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <label htmlFor="">Email:</label>
      <input type="email"
             onChange={(e) => setEmail(e.target.value)}
             value={email}
      />
      <label htmlFor="">Password:</label>
      <input type="password"
             onChange={(e) => setPassword(e.target.value)}
             value={password}
      />
      <button>Sign Up</button>
    </form>
  )
}