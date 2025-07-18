import React,{ useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from 'axios';


const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const {user, setUser} = useContext(UserContext);
    useEffect(() => {
      if(!token){
        navigate('/login');
      }
    }, [token])

    axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(responce =>{
      if(responce.status === 200){
        setUser(responce.data.user);
        setIsLoading(false);
      }
    }).catch(err => {
      console.log("Error fetching user profile:", err);
      localStorage.removeItem('token');
      navigate('/login');
      
    })

    if(isLoading) {
      return <div>Loading...</div>;
    }
    
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
