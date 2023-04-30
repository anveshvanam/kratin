import React, { useState } from "react";

import Cookies from "js-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const user = username;
    const pass = password;
    const url = "https://kratin-backend.onrender.com/login";
    const userDetails = {
      username: user,
      password: pass,
    };
    console.log(userDetails);
    console.log(JSON.stringify(userDetails));
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.ok) {
      Cookies.set("token", data.token);
      history.push("/home");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-2xl">
      <h1>Login Page</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col shadow-2xl w-screen rounded-md p-4 m-4 py-8 lg:w-2/5 lg:p-36"
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          className="border-[2px] border-gray-400 h-10 text-2xl mt-3 mb-7"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="border-[2px] border-gray-400 h-10 text-2xl mt-3 mb-7"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-sky-950"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
