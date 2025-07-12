import React ,{useState} from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [CaptainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData(
      {
        email: email,
        password: password
      }
    )
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
      <div>
        <img src="./Uber-logo.png" alt="Uber-logo" className='w-16 mb-8' />
        <form onSubmit={(e) => {
          submitHandler(e);

        }} action="">
          <h3 className='font-medium mb-2 text-xl'>What's your email</h3>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value);
          }} type="email" required placeholder='email@example.com' className=' outline-none border w-full p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
          <h3 className='font-medium mb-2 text-xl'>Enter your password</h3>
          <input type="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} required placeholder='Password' className=' outline-none border w-full p-2 px-4 rounded-md  mt-2 text-lg placeholder:text-base bg-[#eeeeee] mb-7' />
          <button className='text-[#fff] font-semibold w-full p-2 px-4 rounded-md  mt-2 text-lg  bg-[#111] mb-7'>Login</button>
          <p className='text-center text-base mb-4'>Want join as fleet? <Link to={'/captaion-signup'} className='text-[#111] font-semibold'>Sign up as Captain</Link></p>
        </form>
      </div>
      <div>
        <Link to={"/login"} className='bg-[#d5622d] flex items-center justify-center w-full text-white font-semibold mb-7 rounded text-lg py-2'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
