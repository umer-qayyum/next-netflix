import React from 'react'
import { MdEmail,MdOutlineChat } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
const Cardscontact = () => {
  return (
    <>
       <div className='col-span-1 flex flex-col gap-4 border justify-center items-center p-3 my-3 shadow-xl'>
        <MdEmail className='text-3xl text-[#E50914]' />
        <h2 className='text-lg font-semibold'>Email</h2> 
        <p>Monday to Friday Expected</p>
        <p>response time: 72 hours</p>
        <a href='#'>send email</a>

      </div>
      <div className='col-span-1 flex flex-col gap-4 border justify-center items-center p-3 my-3  shadow-xl'>
        <MdOutlineChat className='text-3xl text-[#E50914]'/>
        <h2 className='text-lg font-semibold'>Live chat</h2>
        <p>Weekdays: 9 AM — 6 PM ET</p>
        <p>Weekends: 9 AM — 5 PM ET</p>
        <a href='#'>send email</a>

      </div>
      <div className='col-span-1 flex flex-col gap-4 border justify-center items-center p-3 my-3  shadow-xl'>
      <SiGoogleforms className='text-3xl text-[#E50914]'/>
      <h2 className='text-lg font-semibold'>Community Forum</h2>
        <p>Monday to Friday Expected</p>
        <p>response time: 72 hours</p>
        <a href='#'>send email</a>

      </div>
    </>
  )
}

export default Cardscontact
