import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuickFind from '../components/QuickFind';
import ViewCatalogue from '../components/ViewCatalogue';
import Gallery from '../components/Gallery';
import BackToTop from '../components/BackToTop';
import cat from '../images/cat.jpg'
import car2 from '../images/car2.jpg';
import PopUp from '../components/PopUp';
import hamburger from '../images/hamburger.svg'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { purple } from '@mui/material/colors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartContent from '../components/CartContent';
import jf from '@mui/icons-material/Settings'
import { Settings } from '@mui/icons-material';


export default function Home({isSignIn, setCartItems, setIsSignIn, signInWelcome, setSignInWelcome}) {
    useEffect(()=> {
        // alert("Reload")
        // window.scrollTo(0, 0);
        let user = localStorage.getItem("user");
        user = JSON.parse(user)
        if(user.loggedIn === "true"){
            setIsSignIn(n => true);
            let cart = localStorage.getItem(user.email);
            try {
                cart = JSON.parse(cart);
                if (cart.length > 0){
                    setCartItems(n => cart);
                }
            } catch (error) {
                setCartItems(n => []);
            }
        }
      },[])

    if (signInWelcome === "show" ){
        setTimeout(() => {
            setSignInWelcome("hidden");
        }, 5000);
    }
    return (
    <>
        {signInWelcome === "show" && <PopUp addedPrompt={signInWelcome} text="Logged In Successfully !"  />}
        <div className="bg-white md:h-full md:overflow-scroll no-scrollbar ">
            <BackToTop />
            <div className='overflow-hidden relative mx-auto lg:p-2 lg:portrait:w-[80%] bg-red-4 '>
                {/* Side-Bar */}
                <div className='relative md:landscape:w-1/3 md:landscape:mx-auto md:portrait:float-left md:portrait:w-[39%] md:h-3/4 md:overflow-scroll md:no-scrollbar md:portrait:fixed md:top-36 md:space-y-3 md:m-1
                lg:portrait:w-[40%] lg:-top-3 lg:portrait:h-auto lg:portrait:relative lg:portrait:mt-20
                lg:landscape:w-1/3 lg:landscape:float-left lg:landscape:h-auto
                lg:portrait:space-y-24
                '>
                    <div className='bg-purple-700 w-80 py-4 text-white font-semibold space-y-4 mx-auto rounded-xl text-center shadow md:w-full '>
                        <h2 className='text-lg mb-5'>BUSINESS HOURS</h2>
                        <div>
                            <p>MON - FRI</p>
                            <p>8:00 AM - 6:00 PM</p>
                        </div>
                        <div>
                            <p>SAT</p>
                            <p>8:00 AM - 4:00 PM</p>
                        </div>
                        <div>
                            <p>SUN</p>
                            <p>CLOSED</p>
                        </div>
                    </div>

                    <div className='group relative w-auto m-1 mb-4 p-2 text-center overflow-hidden md:w-full md:m-0 md:p-0  '>
                        <div className='md:w-full'>
                            <img src={car2} className='relative peer md:h-[30rem] md:w-full' />
                        </div>
                        
                        <div className='absolute top-5 flex flex-wrap justify-center space-y-1 md:top-0'>
                            <h2 className=' font-bold text-slate-700'>Your one stop for all your car concerns.</h2>
                            <h2 className=' font-bold text-slate-500'>We Sell, We Rent, We Repair.</h2>
                            <div className='flex gap-5'>
                                <p className='border-2 border-purple-950 px-2 text-purple-900 font-bold '>Sales</p>
                                <p className='border-2 border-purple-950 px-2 text-purple-900 font-bold '>Rentals</p>
                                <p className='border-2 border-purple-950 px-2 text-purple-900 font-bold '>Repairs</p>
                            </div>
                        </div>
                        <div className='group-hover:bg-red-700 absolute w-full bottom-7 left-0 mx-auto text-center md:w-full md:bottom-2 md:p-2  '>
                            <h2 className='text-slate-200 text-[1.1rem] font-mono font-bold'>WE WANT TO BE YOUR ONE FOR ALL !</h2>
                            <ViewCatalogue />
                        </div>
                    </div>

                    <div className='hidden my-10 lg:block '>
                        <Gallery />
                    </div>
                </div>

                {/* Main Secton */}
                <div className='md:landscape:w-2/3 md:landscape:mx-auto md:portrait:float-right md:portrait:w-[59%] md:mt-3
                lg:portrait:-mt-3
                lg:landscape:float-right lg:landscape:w-[66%] lg:landscape:-mt-2
                '>
                    <QuickFind />
                    <div className='my-10 lg:hidden '>
                        <Gallery />
                    </div>

                    <div className='lg:hidden'>
                    <div className='bg-slate-900 p-3  '>
                        <h2 className='text-gray-900 font-bold text-center'>Why Us </h2>
                        <div className='space-y-5 lg:flex lg:flex-wrap lg:justify-evenly lg:space-y-0 gap-1'>
                            <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                                <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                                <p className='text-slate-300'>Timeliness</p>
                            </div>
                            <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                                <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                                <p className='text-slate-300'>Trustworthy</p>
                            </div>
                            <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                                <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                                <p className='text-slate-300'>Accuracy and Efficiency</p>
                            </div>
                            <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                                <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                                <p className='text-slate-300'>Reputable and Reliable</p>
                            </div>
                            <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                                <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                                <p className='text-slate-300'>Home Service</p>
                            </div>
                            <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                                <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                                <p className='text-slate-300'>Mobile Workshop</p>
                            </div>
                        </div>
                    </div>
                
                    <div className='m-1 w-auto h-42 text-center p-4 space-y-8 mb-4 md:text-2xl lg:absolute lg:right-0 lg:w-[30%]'>
                        <h2><NavLink to="/about-us" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900' >ABOUT US</NavLink></h2>
                        <h2><NavLink to="/services" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900' >SERVICES</NavLink></h2>
                        <h2><NavLink to="/reviews" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900' >REVIEWS</NavLink></h2>
                        <h2><NavLink to="/contact-us" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900' >CONTACT US</NavLink></h2>
                    </div>
                    </div>

                    <div className='lg:hidden'>
                       <div className='bg-gradient-to-tr from-black to-red-500 text-center p-2 mb-5 w-full md:mb-10 '>
                            <ViewCatalogue />
                        </div>
                        <div>
                            <Footer  />
                        </div> 
                    </div>
                </div>
               
            </div>
            <div className='hidden shadow-xl border-4 lg:flex lg:justify-between lg:portrait:w-[80%] lg:portrait:mx-auto lg:bg-gray-100 lg:border-gray-900'>
                <div className='bg-slate-900 p-3 lg:w-[65%] lg:portrait:pt-5 '>
                    <h2 className='text-gray-900 font-bold text-center'>Why Us </h2>
                    <div className='space-y-5 lg:flex lg:flex-wrap lg:justify-evenly lg:space-y-0 gap-1'>
                        <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                            <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                            <p className='text-slate-300'>Timeliness</p>
                        </div>
                        <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                            <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                            <p className='text-slate-300'>Trustworthy</p>
                        </div>
                        <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                            <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                            <p className='text-slate-300 text-sm'>Accuracy and Efficiency</p>
                        </div>
                        <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                            <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                            <p className='text-slate-300'>Reputable and Reliable</p>
                        </div>
                        <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                            <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                            <p className='text-slate-300'>Home Service</p>
                        </div>
                        <div className='text-center bg-slate-600 lg:w-[30%] lg:h-40'>
                            <div className='w-full h-40 bg-blue-400 lg:h-[80%]'></div>
                            <p className='text-slate-300'>Mobile Workshop</p>
                        </div>
                    </div>
                </div>
            
                <div className='m-1 w-auto h-42 text-center p-4 space-y-8 mb-4 md:text-2xl lg:w-[33%] lg:space-y-14'>
                    <h2><NavLink to="/about-us" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900 lg:portrait:px-2' >ABOUT US</NavLink></h2>
                    <h2><NavLink to="/services" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900 lg:portrait:px-2' >SERVICES</NavLink></h2>
                    <h2><NavLink to="/reviews" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900 lg:portrait:px-2' >REVIEWS</NavLink></h2>
                    <h2><NavLink to="/contact-us" className='block border-2 border-purple-800 px-24 py-2 font-bold text-violet-600 hover:text-white hover:bg-violet-900 lg:portrait:px-2' >CONTACT US</NavLink></h2>
                </div>
            </div>

            <div className='hidden lg:block'>
                <div className='lg:hidden bg-gradient-to-tr from-black to-red-500 text-center p-2 mb-5 w-full md:mb-10 '>
                    <ViewCatalogue />
                </div>
                <div className='hidden my-10 text-center lg:block lg:px-5 lg:w-3/4 lg:h-40 lg:py-14 lg:mx-auto relative'>
                    <ViewCatalogue />
                </div>
                <div>
                    <Footer  />
                </div> 
            </div>
        </div>
    </>
    )
}

