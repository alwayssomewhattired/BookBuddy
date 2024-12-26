/* TODO - add your code to create a functional React component that renders a login form */

import { Link } from "react-router-dom";
import { useState } from "react";
import { useAddLoginMutation } from "./LoginSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createLoginMutation, { isLoading, error }] = useAddLoginMutation();
  const navigate = useNavigate();

  const loginInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await createLoginMutation({
        email,
        password,
      }).unwrap();
      console.log(response.token);
      localStorage.setItem("token", response.token);
      navigate("/Account");
    } catch (error) {
      console.error(error);
    }
  };

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
        <button>Login</button>
        {isLoading && <output>Uploading User information...</output>}
        {error && <output>No user found{error.message}</output>}
      </form>
    </>
  );
}
