import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-bold my-7'>Sing Up</h1>
      <form className='flex flex-col gap-4' >
        <input type="text" placeholder='Username'  id='username' className='bg-slate-100 p-3 rounded-lg'/>
        <input type="email" placeholder='Email'  id='email' className='bg-slate-100 p-3 rounded-lg'/>
        <input type="password" placeholder='Password'  id='password' className='bg-slate-100 p-3 rounded-lg'/>
        <button type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sing Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account ?</p>
        <Link to="/signin">
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp