import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

   return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        action=""
        className="max-w-100 w-full space-y-9 border-2 bg-white border-gray-300 p-8 rounded-2xl"
      >
        <div>
          <h2 className="text-2xl text-center text-purple-600 font-semibold">
           Login
          </h2>
          <p className="text-center text-gray-500 text-sm font-medium">
            It will take 3 sec
          </p>
        </div>

        <div className="flex flex-col gap-9">
         

          <div>
            <label htmlFor="email" className="font-semibold">
              Email<sup className="text-red-700 text-lg">*</sup>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="mt-2 w-full outline-0 rounded p-2 ring-1 border-none ring-gray-400 focus:ring-1 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="font-semibold">
              Password<sup className="text-red-700 text-lg">*</sup>
            </label>

            <div className="relative">
                <input
                  type={showPassword? "text":"password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="at least 8 characters"
                  className="mt-2 w-full outline-0 rounded p-2 ring-1 border-none  ring-gray-400 focus:ring-1 focus:ring-purple-600"
                  required
                />
                <div
                 onClick={() => setShowPassword(!showPassword)}
                 className="absolute top-[50%] translate-[-30%] right-2 cursor-pointer">
                  {showPassword? <FaRegEye size={22}/>: <FaRegEyeSlash size={22}/>}
                </div>
            </div>

          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-2.5 bg-purple-600 font-semibold rounded-md text-white tracking-wide mb-3 hover:bg-purple-700 hover:cursor-pointer"
          >
            Login
          </button>
          <p className="text-center text-gray-500">
           Create an Account?{" "}
            <Link
              className="text-purple-500 font-medium hover:text-purple-600"
              to="/signup"
            >
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login