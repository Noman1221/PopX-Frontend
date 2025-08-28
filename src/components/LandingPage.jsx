import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='w-screen h-screen lg:flex justify-center'>
      <section className='border bg-gray-50 border-gray-300 lg:h-lvh h-screen lg:w-1/4 w-full'>
        <section className='h-2/3 '>
          {/* empty space */}
        </section>
        <section className='h-1/3  p-5'>
          <h1 className='text-3xl font-semibold'>Welcome to PopX</h1>
          <h3 className='text-base text-neutral-400 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores harum aliquid</h3>
          <div className='flex gap-2 flex-col my-5'>
            <Link to={'/PopX-Frontend/SignupPage'}>
            
            <button className='w-full py-2 font-semibold cursor-pointer rounded-lg text-white bg-[#6c25ff]'>Create Account</button>
            </Link>
            <Link to={'/PopX-Frontend/LoginPage'}>
            
            <button className='w-full py-2 font-semibold cursor-pointer rounded-lg bg-[#cdb9fa]'>Already Registerd? Login</button>
            </Link>
          </div>
        </section>
      </section>
    </div>
  )
}

export default LandingPage