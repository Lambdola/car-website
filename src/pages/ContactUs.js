import React, {useEffect} from 'react';
import BackToTop from '../components/BackToTop';

function ContactUs({isSignIn, setIsSignIn, cartItems}) {
  useEffect(()=> {
    window.scrollTo(0, 0);
    if (isSignIn === true){
      setIsSignIn(true);
    }
  },[setIsSignIn]);

  return (
    <>
        <BackToTop />
        <h1 className='font-bold text-xl text-center'>CONTACT US</h1>
        <div className='border-2 border-black m-2'></div>
        <div className='max-w-full bg-red-200'>
          <p>{JSON.stringify(cartItems)}</p>
        </div>
        
    </>
  );
}

export default ContactUs;