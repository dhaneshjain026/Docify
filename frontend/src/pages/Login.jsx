import React, { useState, useEffect } from 'react';
import logo from "../images/logo.png";
import { IoEye } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdOutlineWifiPassword } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import rightIMG from "../images/loginRight.png";
import { api_base_url } from '../Helper';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/"); // Redirect to home if logged in
    }
  }, [navigate]);

  const login = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    fetch(api_base_url + "/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Store token and user information in localStorage
          localStorage.setItem("token", data.token);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userId", data.userId);

          setTimeout(() => {
            navigate("/"); // Redirect to home on success
          }, 100);
        } else {
          setError(data.message); // Show error message if login fails
        }
      })
      .catch(() => {
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <div className="flex overflow-hidden items-center w-screen justify-center flex-col h-screen bg-[#F0F0F0]">
        <div className="flex w-full items-center">
          <div className="left w-[30%] flex flex-col ml-[100px]">
            <img className="w-[210px]" src={logo} alt="Logo" />
            <form onSubmit={login} className="pl-3 mt-5" action="">
              <div className="inputCon">
                <p className=" text-[14px] text-[#808080]">Email</p>
                <div className="inputBox w-[100%]">
                  <i>
                    <MdEmail />
                  </i>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    id="Email"
                    name="Email"
                    required
                  />
                </div>
              </div>

              <div className="inputCon">
                <p className=" text-[14px] text-[#808080]">Password</p>
                <div className="inputBox w-[100%]">
                  <i>
                    <MdOutlineWifiPassword />
                  </i>
                  <input
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    type="password"
                    placeholder="Password"
                    id="Password"
                    name="Password"
                    required
                  />
                  <i className=" cursor-pointer !mr-3 !text-[25px]">
                    <IoEye />
                  </i>
                </div>
              </div>

              <p className="text-red-500 text-[14px] my-2">{error}</p>
              <p>
                Don't have an account?{" "}
                <Link to="/signUp" className="text-blue-500">
                  Sign Up
                </Link>
              </p>

              <button className="p-[10px] bg-green-500 transition-all hover:bg-green-600 text-white rounded-lg w-full border-0 mt-3">
                Login
              </button>
            </form>
          </div>
          <div className="right flex items-end justify-end">
            <img className="w-[35vw]" src={rightIMG} alt="Right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
