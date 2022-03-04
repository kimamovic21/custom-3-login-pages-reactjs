import React from 'react';
import LoginImg from '../assets/img1.jpg';

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
       
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover'
                 src={LoginImg} alt="Login image" />
        </div>

        <div className='bg-grey-100 flex flex-col justify-center'>

            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>
                    Brand.</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className="border p-2" type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className="border p-2" type="password" />
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-400 text-white'>
                    Sign in
                </button>
                <div className='flex justify-between'>
                    <p className='flex items-center'>
                        <input className="mr-2" type="checkbox" /> Remember me</p>
                    <p>Create an account</p>
                </div>
            </form>

        </div>

    </div>
  )
}
