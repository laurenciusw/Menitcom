import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { register } from "../store/actions/userAction";


export default function RegisterPage() {
    const dispatch = useDispatch()

    // regis form
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
      });

      const handleInput = (e) => {
        const { name, value } = e.target;
        setRegisterForm((form) => ({
          ...form,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(registerForm))
          .then(() => {
            setRegisterForm({
              username: '',
              email: '',
              password: '',
              phoneNumber: '',
              address: '',
            });
          })
          .catch((error) => {
            console.log(error)
          });
      };
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
          <label
            for="username"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="user name"
            autocomplete="email"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            value={registerForm.username}
            onChange={handleInput}
          />
          </div>
          <label
            for="email"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john.doe@company.com"
            autocomplete="email"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
            value={registerForm.email}
            onChange={handleInput}
          />
          <label
            for="password"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="********"
            autocomplete="new-password"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
            value={registerForm.password}
            onChange={handleInput}
          />
          <label
            for="phoneNumber"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            phoneNumber
          </label>
          <input
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            value={registerForm.phoneNumber}
            onChange={handleInput}
          />

        <label
            for="address"
            className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="address" 
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          
            value={registerForm.address}
            onChange={handleInput}
          />
          <button
            type="submit"
            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Sign up
          </button>
         
        </form>
      </div>
    </div>
  );
}
