import axios from "axios";
import React, { useState } from "react";

const Login = ({ isLogged, setIsLogged }) => {
  const [userPass, setUserPass] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:3000/api/users/login",
      userPass
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserPass((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(userPass);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-lg my-10"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Login
        </button>

        <button
          onClick={() => setIsLogged(false)}
          className="w-full bg-blue-500 text-black py-2 rounded-md mt-3 text-black cursor-pointer"
        >
          Not registered?, <a>Sign-Up</a>
        </button>
      </form>
    </>
  );
};

export default Login;
