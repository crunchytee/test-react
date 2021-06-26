import React, { useState } from "react";
import { render } from "react-dom";

const App = () => {

  const [username, setUsername] = useState("Enter your dang username");
  const [password, setPassword] = useState("Enter your dang password");

    return (
      <div>
        <form action="/action-page.php">
          <h1>Login Form</h1>
          <div class="formcontainer">
            <hr/>
            <div class="container">
              <label for="uname"><strong>Username</strong></label>
              <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder={username} name="uname" required/>
              <label for="psw"><strong>Password</strong></label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={password} name="psw" required/>
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  };
  
  render(<App />, document.getElementById("root"));