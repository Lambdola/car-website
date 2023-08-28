import React, {useEffect} from 'react';
import BackToTop from '../components/BackToTop';
import contactUs from '../images/contact-us.jpg';
import chat from '../images/chat.png';
import email from '../images/email.png';
import bulb from '../images/bulb.png';

function ContactUs({isSignIn, setIsSignIn, cartItems}) {
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

  return (
    <div className='page-transition'>
        <BackToTop />
        <h1 className='font-bold text-xl text-center'>CONTACT US</h1>
        <div className='border-2 border-black m-2'></div>
        <div className='w-full bg-red-20'>
          <div className='relative'>
            <div className='absolute'>
              Ola
            </div>
            <img src={contactUs} />
          </div>

          <div className='bg-stone-100 pb-28 pt-7'>
            <div className='space-y-4 mb-16'>
              <p className='text-center font-bold text-gray-950 text-xl font-roboto'>How can we help you ?</p>
              <div className='flex justify-center gap-3 align-middle'>
                <div className='w-8 h-8'>
                  <img src={chat} />
                </div>
                <p className='text-gray-800 text-2xl font-bold -mt-1'>Chat</p>
              </div>
            </div>
            <div className='space-y-1'>
              <div className='flex justify-center gap-3 align-middle'>
                <div className='w-8 h-8'>
                  <img src={email} />
                </div>  
                <p className='text-gray-800 text-xl font-bold mt-0'>Feedback</p>
              </div>
              <div className='text-center w-2/3 h-16 mx-auto '>
                <button className='w-full h-full border-2 border-purple-800 text-purple-900 font-bold rounded-lg'>Leave Feedback</button>
              </div>
            </div>
          </div>

          <div className='text-center mt-5 px-7'>
            <p className='text-xl font-bold text-gray-900'>Have a question? Let's connect</p>

            <div className='w-2/3 mx-auto space-y-4 mt-10'>
              <div className='w-20 h-20 text-center mx-auto'>
                <img src={bulb} />
              </div>
              <p className='text-2xl font-bold text-gray-900'>Frequently Asked Questions</p>
              <p className='text-xl font-medium text-gray-900'>Check out our most popular questions, or reach out anytime by phone, chat, or feedback.</p>
              <div className='w-2/3 mx-auto h-16'>
                <button className='w-full h-full bg-fuchsia-800 text-white rounded-lg font-bold'>See FAQs</button>
              </div>
            </div>

            <div>
              
            </div>
           
          </div>
         
         
          <p>{JSON.stringify(cartItems)}</p>
        </div>
        
    </div>
  );
}

export default ContactUs;