import React from 'react';
import LoginImg2 from '../assets/img2.jpg';
import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook} from 'react-icons/ai';

export default function Login2() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' 
             src={LoginImg2} alt="Login2 img" />
        <div className='flex justify-center items-center h-full'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                <h2 className='text-4xl font-bold text-center py-8'>
                    Brand.
                </h2>
                <div className='flex justify-between py-8'>
                    <p className='border shadow-lg hover:shadow-xl px-6 
                        py-2 relative flex items-center'>
                        <AiFillFacebook className='mr-2'/> Facebook</p>
                    <p className='border shadow-lg hover:shadow-xl px-6
                        py-2 relative flex items-center'>
                        <FcGoogle className='mr-2'/> Google</p>
                </div>
                <div className='flex flex-col mb-4'>
                    <labe>Username</labe>
                    <input className='border relative p-2 bg-gray-100' 
                    type="text" />
                </div>
                <div className='flex flex-col'>
                    <labe>Password</labe>
                    <input className='border relative p-2 bg-gray-100' 
                    type="password" />
                </div>
                <button className='w-full py-3 mt-8 bg-indigo-600
                     hover:bg-indigo-500 relative text-white'>
                    Sign in
                </button>
                <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"/>Remember me</p>
                <p className='text-center mt-8'>Not a member ? Sign up now !</p>
            </form>
        </div>
    </div>
  )
}