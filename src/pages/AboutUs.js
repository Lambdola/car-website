import React , {useEffect, useState} from 'react';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import { purple } from '@mui/material/colors';
import mobilescreen from '../images/mobilescreen.png';
import { NavLink } from 'react-router-dom';


function AboutUs({ isSignIn, setIsSignIn}) {
  const [team, setTeam] = useState("sales");
  useEffect(()=> {
    // window.scrollTo(0, 0);
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

  function handleClick(param) {
    if (param === "sales") {
      setTeam("sales")
    }
    if (param === "rentals") {
      setTeam("rentals")
    }
    if (param === "repairs") {
      setTeam("repairs")
    }
  }

  return (
   <div className=''>
    <h1 className='font-bold text-xl text-center'>ABOUT US</h1>
    <div className='border-2 border-black  m-2'></div>

    {/* Services Icon */}
    <div className='w-full h-40 absolute -z-10 blur-sm'>
      <img src="https://images.pexels.com/photos/17883975/pexels-photo-17883975/free-photo-of-steering-wheel-in-luxury-car.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Background" className='h-full w-full object-cover' />
    </div>
    <div className='flex justify-evenly '>
      <div className='flex flex-wrap flex-col page-transition'>
        <div className="-mb-2 ml-3 p-2">
          <PaidOutlinedIcon sx={{fontSize:35}} className='text-white' />
        </div>
        <div>
          <DirectionsCarOutlinedIcon sx={{fontSize:60}} className='text-white' />
        </div>
      </div>

      <div className='flex flex-wrap flex-col page-transition '>
        <div className="-mb-2 ml-3 p-2">
          <KeyOutlinedIcon sx={{fontSize:35}} className='text-white' />
        </div>
        <div>
          <DirectionsCarOutlinedIcon sx={{fontSize:60}} className='text-white' />
        </div>
      </div>

      <div className='flex flex-wrap flex-col page-transition '>
        <div className="-mb-2 ml-3 p-2">
          <HandymanOutlinedIcon sx={{fontSize:35}} className='text-white' />
        </div>
        <div>
          <DirectionsCarOutlinedIcon sx={{fontSize:60}} className='text-white' />
        </div>
      </div>
    </div>

    <div className='text-center text-gray-200'>
      <h1>Trizent Autos ...</h1>
      <div>
        <p>Transforming the Car Users experience</p>
      {/* <p>Your No 1 All for One partner.</p> */}
      </div>
      
    </div>

    <div className='space-y-4 mt-10'>
      <div className='w-full bg-gray-950 flex'>
        <div className='w-2/3 py-2 pl-3'>
          <h2 className='text-slate-100 font-bold text-lg'>Our Story</h2>
          <p className='text-slate-200'>Tell shoppers the origin story of your business and why you started it. For the most impact, make it memorable and personal, so customers relate and connect with your brand.</p>
        </div>
        <div className='w-1/3'>
          <img src="https://images.pexels.com/photos/11154021/pexels-photo-11154021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Story" className='h-48 w-full object-cover' />
        </div>
        
      </div>

      <div className='w-full bg-gray-950 flex'>
        <div className='w-2/3 py-2 pl-3'>
          <h2 className='text-slate-100 font-bold text-lg'>Our Goal</h2>
          <p className='text-slate-200'>What do you offer and who is it for? Help shoppers see the value of your product or service by sharing how it solves problems or needs.</p>
        </div>
        <div className='w-1/3'>
          <img src="https://images.pexels.com/photos/4806437/pexels-photo-4806437.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Our Goal" className='h-48 object-cover' />
        </div>
        
      </div>

      <div className='w-full bg-gray-950 flex'>
        <div className='w-2/3 py-2 pl-3'>
          <h2 className='text-slate-100 font-bold text-lg'>How We Get Things Done</h2>
          <p className='text-slate-200'>If you offer a service, explain your business model or how your products are made. If you have a unique way of doing things, show it. This builds credibility with shoppers and helps you stand out against competitors.</p>
        </div>
        <div className='w-1/3'>
          <img src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=300" alt="How we operate" className='h-full object-cover' />
        </div>
        
      </div>
    </div>

    <div className='w-full px-5 mb-10'>
       <div className='h-48 w-24 mx-auto text-center my-10'>
        <img src={mobilescreen} alt="phone" className='h-full shadow-lg' />
      </div>
      <button className='w-full h-10 text-lg bg-purple-900 text-white'><NavLink to="/services">OUR SERVICES</NavLink></button>
    </div>

    <div className='w-full bg-gray-950  mb-10'>
      <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300" alt="team" className='w-full' />
      <div className='p-2 text-slate-200 text-lg'>
        At Trizent Autos, we work as a team to bring our customers full satisfaction. We have a wide range of teams to attend to your needs be it on sales, repairs or rentals.
        We boast of having an excellent team as one of the perks and reasons of why you should be working with us.
        We are a company that incorporates all thre teams into one. 
        At Trizent Autos, your car troubles will be solved.
      </div>
    </div>

    <div>
      <div className='px-4 py-2 space-y-2 mb-5'>
        <h3 className='text-2xl text-gray-950 font-bold'>Our Teams</h3>
        <div className='flex justify-start gap-2 text-lg'>
          <button onClick={() => handleClick("sales")} className={`${team === "sales" ? "border-purple-800 font-bold text-gray-900" : "border-transparent" } text-gray-800 font-semibold border-b-4 `}>Sales Team</button>
          <button onClick={() => handleClick("rentals")} className={`${team === "rentals" ? "border-purple-800 font-bold text-gray-900" : "border-transparent" } text-gray-800 font-semibold border-b-4 `} >Rentals Team</button>
          <button onClick={() => handleClick("repairs")} className={`${team === "repairs" ? "border-purple-800 font-bold text-gray-900" : "border-transparent" } text-gray-800 font-semibold border-b-4 `}>Repairs Team</button>
        </div>
        <hr />
      </div>
      
      {team === "sales" && 
        <div className='p-4'>
        <h3 className='text-2xl text-purple-600 font-bold mb-5  '>Sales Team</h3>
        <div className='space-y-4'>
          {[1,2,3,4,5].map(val => {
            return (
              <div key={val} className='text-center bg-stone-300 rounded-lg py-5 space-y-8'>
                <div className='space-y-1'>
                  <div className='h-24 w-24 bg-red-300 rounded-full mx-auto'></div>
                  <p className='text-gray-950 font-bold text-xl font-roboto'>Name</p>
                  <p className='text-gray-600 font-bold text-lg'>Position Held</p>
                </div>
                <button className='w-60 h-10 rounded font-bold bg-orange-600 text-white'>LEARN MORE</button>
              </div>
            )
          })}
        </div>
      </div>
      }
      {team === "rentals" && 
        <div className='p-4'>
        <h3 className='text-2xl text-purple-600 font-bold mb-5  '>Rentals Team</h3>
        <div className='space-y-4'>
          {[1,2,3,4,5].map(val => {
            return (
              <div key={val} className='text-center bg-stone-300 rounded-lg py-5 space-y-8'>
                <div className='space-y-1'>
                  <div className='h-24 w-24 bg-red-300 rounded-full mx-auto'></div>
                  <p className='text-gray-950 font-bold text-xl font-roboto'>Name</p>
                  <p className='text-gray-600 font-bold text-lg'>Position Held</p>
                </div>
                <button className='w-60 h-10 rounded font-bold bg-orange-600 text-white'>LEARN MORE</button>
              </div>
            )
          })}
        </div>
      </div>
      }
      {team === "repairs" && 
        <div className='p-4'>
        <h3 className='text-2xl text-purple-600 font-bold mb-5  '>Repairs Team</h3>
        <div className='space-y-4'>
          {[1,2,3,4,5].map(val => {
            return (
              <div key={val} className='text-center bg-stone-300 rounded-lg py-5 space-y-8'>
                <div className='space-y-1'>
                  <div className='h-24 w-24 bg-red-300 rounded-full mx-auto'></div>
                  <p className='text-gray-950 font-bold text-xl font-roboto'>Name</p>
                  <p className='text-gray-600 font-bold text-lg'>Position Held</p>
                </div>
                <button className='w-60 h-10 rounded font-bold bg-orange-600 text-white'>LEARN MORE</button>
              </div>
            )
          })}
        </div>
      </div>
      }
    </div>

    <div className='text-center'>
      <button className='bg-slate-200 bg-opacity-50 text-center px-12 py-7 text-xl font-bold text-purple-800 hover:bg-opacity-100 border-2 rounded-md border-purple-800 hover:bg-purple-800 hover:text-white'><NavLink to="/reviews">Customers Feedbacks</NavLink></button>
    </div>

    
   


    
   </div>
  );
}

export default AboutUs;