import React , {useEffect} from 'react';


function AboutUs({ isSignIn, setIsSignIn}) {
  useEffect(()=> {
    window.scrollTo(0, 0);
    if (isSignIn === true){
      setIsSignIn(true);
    }
  },[setIsSignIn]);

  return (
   <>
    <h1 className='font-bold text-xl text-center'>ABOUT US</h1>
    <div className='border-2 border-black m-2'></div>
    
   </>
  );
}

export default AboutUs;