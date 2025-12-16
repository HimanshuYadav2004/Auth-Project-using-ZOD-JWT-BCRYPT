import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { email } from "zod";

const Register = ({ isLogged, setIsLogged }) => {
  const [userData, setUserData] = useState({});

  function onInputChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/register",
        userData
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-lg my-10"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={onInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={onInputChange}
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
            onChange={onInputChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Submit
        </button>

        <button
          onClick={() => setIsLogged(true)}
          className="w-full bg-blue-500 text-black py-2 rounded-md mt-3 text-black cursor-pointer"
        >
          Already registered?, <a>Login</a>
        </button>
      </form>
    </>
  );
};

export default Register;
