import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserSingup = () => {
  const [email, setEmail] = useState('');
  const [Name, setName] = useState({ firstname: '', lastname: '' });
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUser(
      {
        email: email,
        password: password,
        firstname: Name.firstname,
        lastname: Name.lastname
      }
    )
    console.log(user);

    setEmail('');
    setPassword('');
    setName({
      firstname: '',
      lastname: ''
    });
  }
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
      <div>
        <img src="./uber.png" alt="Uber-logo" className='w-16 mb-8' />
        <form onSubmit={(e) => {
          submitHandler(e);

        }} action="">
          <h3 className='font-medium mb-2 text-xl'>What's your name</h3>
          <div>
            <input value={Name.firstname} onChange={(e) => {
              setName((prev) => ({ ...prev, firstname: e.target.value }))
            }} type="text" required placeholder='Enter your first name' className=' outline-none border w-full p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
            <input value={Name.lastname} onChange={(e) => {
              setName((prev) => ({ ...prev, lastname: e.target.value }))
            }} type="text" placeholder='Enter your last name' className=' outline-none border w-full p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
          </div>
          <h3 className='font-medium mb-2 text-xl'>What's your email</h3>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value);
          }} type="email" required placeholder='email@example.com' className=' outline-none border w-full p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
          <h3 className='font-medium mb-2 text-xl'>Enter your password</h3>
          <input type="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} required placeholder='Password' className=' outline-none border w-full p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
          <button className='text-[#fff] font-semibold w-full p-2 px-4 rounded-md  mt-2 text-lg  bg-[#111] mb-7'>SingUp</button>
          <p className='text-center text-base mb-4'>Already have an account ? <Link to={'/login'} className='text-[#111] font-semibold'>Login</Link></p>
        </form>
      </div>
      <div>
        <Link to={"/captaion-login"} className='bg-[#10b461] flex items-center justify-center w-full text-white font-semibold mb-7 rounded text-lg py-2'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserSingup
