import React, { useState } from 'react';
import "../styles/Footer.css"

function PasswordProtection({ onPasswordSubmit }) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password);
  };

  return (
    <div className='psw'>
    <h1> Welcome baby!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label><h4>Please Enter Password:</h4></label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PasswordProtection;
