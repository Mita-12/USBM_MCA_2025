/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

const Form = () => {
  const userArr = JSON.parse(localStorage.getItem("users")) || [];

  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handlesubmit = (e) => {
    let userObj = {
      name: UserName,
      email: Email,
      password: password,
    };
    userArr.push(userObj);
    localStorage.setItem("users", JSON.stringify(userArr));
    alert("successfully registed");
    setUserName("");
    setEmail("");
    setpassword("");

  };
  return (
    <div className="flex justify-center mt-5 flex-col items-center gap-3">
      <input type="text"
        placeholder='UserName' required
        value={UserName}
        onChange={handleChange}
        className='bg-slate-500 text-white' />

      <input type="email"
        placeholder='Email' required
        value={Email}
        onChange={handleEmail}
        className='bg-slate-500 text-white' />

      <input type="password"
        placeholder='password' required
        value={password}
        onChange={handlepassword}
        className='bg-slate-500 text-white' />

      <button onClick={handlesubmit}
        className='bg-red-500 text-white'>
        Submit
      </button>

    </div>
  );
};

export default Form