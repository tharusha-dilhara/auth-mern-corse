import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [FormData, setFormData] = useState({});
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const res = await fetch("http://localhost:5000/api/auth/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
      setloading(false);
      if(data.success === false){
        seterror(true);
      }else{
        seterror(false);
      }
    } catch (error) {
      seterror(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7">Sing Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button disabled={loading}
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link to="/signin">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
      <p className="text-red-600 mt-5">{error && "something went worning!"}</p>
    </div>
  );
}

export default SignUp;
