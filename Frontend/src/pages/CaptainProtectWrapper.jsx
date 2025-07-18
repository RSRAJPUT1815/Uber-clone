import React,{ useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const {captain, setCaptain} = useContext(CaptainDataContext);
    useEffect(() => {
      if(!token){
        navigate('/captain-login');
      }
    }, [token])

    axios.get(`${import.meta.env.VITE_API_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(responce =>{
      if(responce.status === 200){
        setCaptain(responce.data.captain);
        setIsLoading(false);
      }
    }).catch(err => {
      console.log("Error fetching captain profile:", err);
      localStorage.removeItem('token');
      navigate('/captain-login');
      
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

export default CaptainProtectWrapper
