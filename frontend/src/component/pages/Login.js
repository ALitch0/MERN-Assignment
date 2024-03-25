import React, { useState, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.title = "Login";
  }, []);
  
  return (
    
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            type="password"
          />
        </fieldset>
        <button type="submit">Sign-In</button>
      </form>
    </div>
  );
}

export default Login;