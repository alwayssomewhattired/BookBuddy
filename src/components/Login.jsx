/* TODO - add your code to create a functional React component that renders a login form */

import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginInfo() {
    console.log("hi");
  }

  return (
    <>
      <h2>Login</h2>
      <div>
        <Link to="/">Click to go home</Link>
      </div>
      <form onSubmit={loginInfo}>
        <label>
          Email
          <input
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}
