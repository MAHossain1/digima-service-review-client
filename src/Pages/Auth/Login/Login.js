import React, { useContext } from "react";
import img from "../../../assests/login/login.svg";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext/UserContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then(result => {
        const user = result.user;
        toast.success("User Login successfully");
        form.reset();
        console.log(user);
      })
      .catch(e => console.error(e));
  };

  const handleGoogleSign = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        toast.success("User Login successfully");
        console.log(user);
      })
      .catch(e => console.error(e));
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-12">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-error" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center font-semibold text-slate-700">
            Or Sign Up with
          </p>
          <div className="text-center my-4 text-3xl">
            <button>
              <FaFacebook className="text-blue-600" />
            </button>
            <button onClick={handleGoogleSign}>
              <FcGoogle className="ml-4" />
            </button>
            <button className="ml-4">
              <GoMarkGithub />
            </button>
          </div>
          <p className="text-center">
            New to Digima Marketing Service?{" "}
            <Link className="font-bold text-orange-600" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
