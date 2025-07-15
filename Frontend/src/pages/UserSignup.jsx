import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserContext} from '../context/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [FullName, setFullName] = useState({ firstname: '', lastname: '' });
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const {user , setUser} = React.useContext(UserContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname: FullName.firstname,
        lastname: FullName.lastname
      },
      email: email,
      password: password
    }

    const responce = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    if(responce.status===201){
      const data = responce.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
    setFullName({
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
            <input value={FullName.firstname} onChange={(e) => {
              setFullName((prev) => ({ ...prev, firstname: e.target.value }))
            }} type="text" required placeholder='Enter your first name' className=' outline-none border w-full p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
            <input value={FullName.lastname} onChange={(e) => {
              setFullName((prev) => ({ ...prev, lastname: e.target.value }))
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
          <button className='text-[#fff] font-semibold w-full p-2 px-4 rounded-md  mt-2 text-lg  bg-[#111] mb-7'>Create account</button>
          <p className='text-center text-base mb-4'>Already have an account ? <Link to={'/login'} className='text-[#111] font-semibold'>Login</Link></p>
        </form>
      </div>
      <div>
        <p className='text-xs font-semibold leading-tight'>
          This site is protected by reCAPTCHA and the Google <span className='underline font-bold'>Privacy Policy</span> and <span className='underline font-bold'>Terms of Service</span> apply.
        </p>
      </div>
    </div>
  )
}

export default UserSignup
