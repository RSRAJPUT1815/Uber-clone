import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext}  from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSingup = () => {
  const [email, setEmail] = useState('');
  const [FullName, setFullName] = useState({ firstname: '', lastname: '' });
  const [password, setPassword] = useState('');
  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

  const navigate = useNavigate();

  
  
  
  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  

  const submitHandler =async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: FullName.firstname,
        lastname: FullName.lastname
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const responce = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newUser);
    if(responce.status===201){
      const data = responce.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }


    setEmail('');
    setPassword('');
    setFullName({
      firstname: '',
      lastname: ''
    });
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
      <div>
        <img src="./Uber-logo.png" alt="Uber-logo" className='w-16 mb-8' />
        <form onSubmit={(e) => {
          submitHandler(e);

        }} action="">
          <h3 className='font-medium mb-2 text-xl'>What's our Captain name</h3>
          <div className='flex  gap-2 '>
            <input value={FullName.firstname} onChange={(e) => {
              setFullName((prev) => ({ ...prev, firstname: e.target.value }))
            }} type="text" required placeholder='Enter your first name' className=' outline-none border w-1/2 p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
            <input value={FullName.lastname} onChange={(e) => {
              setFullName((prev) => ({ ...prev, lastname: e.target.value }))
            }} type="text" placeholder='Enter your last name' className=' outline-none border w-1/2 p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
          </div>
          <h3 className='font-medium mb-2 text-xl'>What's our Captain email</h3>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value);
          }} type="email" required placeholder='email@example.com' className=' outline-none border w-full p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
          <h3 className='font-medium mb-2 text-xl'>Enter your password</h3>
          <input type="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} required placeholder='Password' className=' outline-none border w-full p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
          <h3 className='font-medium mb-2 text-xl'>Vehicle Information</h3>
          <div className='flex flex-wrap gap-1'>
            <input 
              value={vehicleColor} 
              onChange={(e) => setVehicleColor(e.target.value)} 
              type="text" 
              required 
              placeholder='Enter vehicle color' 
              className='outline-none border w-44 p-2 px-3 rounded-md mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' 
            />
            <input 
              value={vehiclePlate} 
              onChange={(e) => setVehiclePlate(e.target.value)} 
              type="text" 
              required 
              placeholder='Enter vehicle plate number' 
              className='outline-none border w-44 p-2 px-3 rounded-md mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' 
            />
            <input 
              value={vehicleCapacity} 
              onChange={(e) => setVehicleCapacity(e.target.value)} 
              type="number" 
              required 
              placeholder='Enter vehicle capacity' 
              className='outline-none border w-44 p-2 px-3 rounded-md mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' 
            />
            <select 
              value={vehicleType} 
              onChange={(e) => setVehicleType(e.target.value)} 
              required 
              className='outline-none border w-44 p-2 px-4 rounded-md mt-2 text-lg bg-[#eeeeee] mb-7'
            >
              <option value="" disabled>Select vehicle type</option>
              <option value="car" className=''>Car</option>
              <option value="auto-rickshaw">Auto</option>
              <option value="bike">Bike</option>
            </select>
          </div>



          <button className='text-[#fff] font-semibold w-full p-2 px-4 rounded-md  mt-2 text-lg  bg-[#111] mb-7'>Create Account</button>
          <p className='text-center text-base mb-4'>Already have an account ? <Link to={'/captain-login'} className='text-[#111] font-semibold'>Login as Caption</Link></p>
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

export default CaptainSingup
