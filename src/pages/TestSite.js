import React, {useEffect} from 'react';
import { Add, Search} from '@mui/icons-material';
import { purple } from '@mui/material/colors';

export default function TestSite({isSignIn ,setIsSignIn}) {
    useEffect(()=> {
            window.scrollTo(0, 0);
            let user = localStorage.getItem("user");
            user = JSON.parse(user)
            if (user.loggedIn === "true") { setIsSignIn(true); }
	    },[])
  return (
    <>
        <h1 className='font-bold text-xl text-center'>Testing Page</h1>
        <div className='border-2 border-black m-2'></div>
        <div className='w-[21rem] pb-10 mx-auto border border-gray-300 shadow-2xl p-3'>
            <p className='p-1 border-b border-orange-600 inline-block font-bold'>Rent Cars</p>
            <div className='mt-5'>
                <p className='text-black font-normal'>Pick-up & return</p>
                <div className='relative'>
                    <div className='absolute left-2 top-2'>
                        <Search sx={{color: purple[800]}} />
                    </div>
                    <input type="text" className='w-full border-b-2 border-orange-500 px-10 h-10 placeholder:font-bold placeholder:text-gray-600 hover:border-orange-300' placeholder='Airport, city or address' />
                </div>
            </div>
            <div className='mt-2 '>
                
                <button className='inline-block ml-1 text-slate-500 font-semibold font-roboto text-sm p-1'>
                    <Add sx={{color:'gray'}} />
                    <p className='inline-block'>Different return location</p>
                </button>
            </div>
            <div className='flex justify-between gap-3 mt-7'>
                <div className=' flex flex-col gap-2'>
                    <p className='text-slate-600 text-sm'>Pick-up date</p>
                    <input type="text" className='p-1 border-b border-slate-700 font-semibold w-36 placeholder:text-[.9rem]' placeholder='Select pick-up date' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-slate-600 text-sm'>Return Date</p>
                    <input type="text" className='p-1 border-b border-slate-700 font-semibold w-36 placeholder:text-[.9rem]' placeholder='Select return date' />
                </div>
            </div>
            <div className='text-center relative mt-5 h-12'>
                <button className='w-full h-full bg-orange-600 text-white font-bold font-roboto hover:bg-orange-500'>RENT CAR</button>
            </div>
        </div>
    </>
  )
}
