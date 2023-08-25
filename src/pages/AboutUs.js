import React , {useEffect} from 'react';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import { purple } from '@mui/material/colors';


function AboutUs({ isSignIn, setIsSignIn}) {
  useEffect(()=> {
    window.scrollTo(0, 0);
    let user = localStorage.getItem("user");
    let test;
    try {
      user = JSON.parse(user);
      test = user.loggedIn;
    } catch (error) {
      user = { "loggedIn": "false" };
    }
    if (user.loggedIn === "true"){
      setIsSignIn(true);
    }
  },[]);

  return (
   <>
    <h1 className='font-bold text-xl text-center'>ABOUT US</h1>
    <div className='border-2 border-black  m-2'></div>

    {/* Services Icon */}
    <div className='flex justify-evenly '>
      <div className='flex flex-wrap flex-col page-transition'>
        <div className="-mb-2 ml-3">
          <PaidOutlinedIcon sx={{fontSize:35}} className='text-gray-900' />
        </div>
        <div>
          <DirectionsCarOutlinedIcon sx={{fontSize:60}} className='text-gray-900' />
        </div>
      </div>

      <div className='flex flex-wrap flex-col page-transition '>
        <div className="-mb-2 ml-3">
          <KeyOutlinedIcon sx={{fontSize:35}} className='text-gray-900' />
        </div>
        <div>
          <DirectionsCarOutlinedIcon sx={{fontSize:60}} className='text-gray-900' />
        </div>
      </div>

      <div className='flex flex-wrap flex-col page-transition '>
        <div className="-mb-2 ml-3">
          <HandymanOutlinedIcon sx={{fontSize:35}} className='text-gray-900' />
        </div>
        <div>
          <DirectionsCarOutlinedIcon sx={{fontSize:60}} className='text-gray-900' />
        </div>
      </div>
    </div>

    <div>
      <h1>Our History</h1>
    </div>
    
   </>
  );
}

export default AboutUs;