import React, { useState, useEffect } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordLengthError(newPassword.length < 8);
  };

  const handleRePasswordChange = (event) => {
    setRePassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== rePassword || password.length < 8) {
      setPasswordsMatch(password === rePassword);
      setPasswordLengthError(password.length < 8);
      return;
    }
  };

  useEffect(() => {
    document.title ='Register';
  }, []);

  return (
    <div className="register">
      <h1>Register</h1>
      <p>Password: Min 8 digits</p>
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
          {passwordLengthError && (
            <p style={{ color: "red" }}>Password must be at least 8 characters long</p>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="re-password">Re-Password: </label>
          <input
            name="re-password"
            id="re-password"
            value={rePassword}
            onChange={handleRePasswordChange}
            required
            type="password"
          />
          {!passwordsMatch && (
            <p style={{ color: "red" }}>Passwords do not match</p>
          )}
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
