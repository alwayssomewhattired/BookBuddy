/* TODO - add your code to create a functional React component that renders a registration form */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddUserMutation } from "./RegisterSlice";
// import { useNavigate } from "react-router-dom";

export default function Register({ token, setToken }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [createPostMutation, isLoading, error] = useAddUserMutation();

  const registerInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await createPostMutation({
        firstname,
        lastname,
        email,
        password,
      }).unwrap();
      console.log(response.token);
      // setToken(response.token);
      localStorage.setItem("token", response.token);
      navigate("/Account");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Register</h2>
      <div>
        <Link to="/">Click to go home</Link>
      </div>
      <form onSubmit={registerInfo}>
        <label>
          First Name
          <input
            name="FirstName"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            name="LastName"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
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
        <button>Add User</button>
        {isLoading && <output>Uploading User information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </>
  );
}
