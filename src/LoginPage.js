import React, { useState } from "react";

const LoginPage = () => {

    const [username, setUsername] = useState("Enter your dang username");
    const [password, setPassword] = useState("Enter your dang password");
  
      return (
        <div>
          <form action="/action-page.php">
            <h1>Login Form</h1>
            <div className="formcontainer">
              <hr/>
              <div className="container">
                <label htmlFor="uname"><strong>Username</strong></label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder={username} name="uname" required/>
                <label htmlFor="psw"><strong>Password</strong></label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={password} name="psw" required/>
              </div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      );
    };

export default LoginPage;