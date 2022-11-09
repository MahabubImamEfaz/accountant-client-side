import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl text-[#274C77] font-bold" mb-10>
        Login Form
      </h1>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
        <form onSubmit={handleSignup}>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Enter your name ..."
            ></input>
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Enter email"
            ></input>
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Enter email"
            ></input>
          </div>

          <button
            type="submit"
            className="inline-block px-7 py-3 bg-[#274C77] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">OR</p>
        </div>
        <button
          type="submit"
          className="inline-block px-7 py-3 bg-[#274C77] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
