"use client"
import React, { useState } from "react";

const ContactForm = () => {
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        message:""
    })
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUser((prevUser) => ({...prevUser, [name] : value}));
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(user);
        try {
            const response=await fetch('http://localhost:3000/api/contact ',{
                method:"POST",
                headers:{'Content_Type':'application/json'},
                body:JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            if(response.status==200){
                setUser({
                    username:"",
                    email:"",
                    phone:"",
                    message:""
                })
            }
        } catch (error) {
            console.log("this error",error)
        }
    }
  return (
    <>
      <form className="p-5 border w-[70%] md:w-[25%] mx-auto flex flex-col justify-center items-start" onSubmit={handleSubmit}>
        <div className="username my-3 text-start">
          <label htmlFor="username">Enter your name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="enter name"
            className="px-4 py-2 rounded-md border block"
            
            onChange={handleChange}
            value={user.username}
          />
        </div>

        <div className="email my-3 text-start">
          <label htmlFor="email ">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
            className="px-4 py-2 rounded-md border block"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="phone my-3 text-start">
          <label htmlFor="phone ">Phone # :</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="enter number"
            className="px-4 py-2 rounded-md border block"
            value={user.phone}
            onChange={handleChange}
          />
        </div>

        <div className="message my-3 text-start">
          <label htmlFor="message ">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="enter message"
            rows={8}
            className="px-4 py-2 rounded-md border block"
            value={user.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="px-5 py-1 bg-black text-white text-center rounded-2xl my-3">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
