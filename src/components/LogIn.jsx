import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database } from "./FirebaseConfig";

export default function LogIn(/*{ onLogIn }*/) {

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value; 

    createUserWithEmailAndPassword(database, email, password).then(data => {
      console.log(data, "authData")
    })

    
    
  };

  return (
    <div className="bg-slate-800 h-screen w-screen flex justify-center items-center">
      <div className="w-96 shadow-lg bg-slate-950 rounded-md p-6">
        <h1 className="text-white text-center text-lg font-bold">
          LOG IN
        </h1>
        <hr className="mt-3" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2 text-white">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="border w-full text-16 px-2 py-1 focus-outline-none focus:ring-0 focus:border-gray-200"
              placeholder="example@gmail.com"
              autoComplete="on"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="block text-base mb-2 text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border w-full text-16 px-2 py-1 focus-outline-none focus:ring-0 focus:border-gray-200"
              placeholder="****"
              autoComplete="off"
            />
          </div>
          <div className="mt-5">
            <button className="border-2 border-slate-600 text-white w-full px-1">
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
