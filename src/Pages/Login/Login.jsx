import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import "./Login.css";

const Login = () => {
  const { login, providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const googleAuth = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleAuth)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="p-10 bg-[#E7ECEF]">
      <h1 className="text-center text-3xl text-[#274C77] font-bold" mb-10>
        Login Form
      </h1>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
        <form onSubmit={handleLogin}>
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
            Login
          </button>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          <button
            onClick={handleGoogleSignIn}
            type="submit"
            className="inline-block px-7 py-3 bg-[#274C77] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Login with Google
          </button>

          <div class="flex items-center justify-around pb-6 mt-5">
            <p class="mb-0 mr-2">Don't have an account?</p>
            <Link to="/signup">
              <button
                type="button"
                class="inline-block px-6 py-2 border-2 border-[#274C77] text-[#274C77]font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
