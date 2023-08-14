import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import CartInfo from '../components/CartInfo';
import Remove from '../components/Remove';
import RemovePrompt from '../components/RemovePrompt';
import BackToTop from '../components/BackToTop';

function Cart({isSignIn, setIsSignIn, setCartItems, cartItems, count, setCount, cartCount,cartTotalPrice, setCartTotalPrice}) {
    const [ removePrompt, setRemovePrompt ] = useState("hide");
    const [repairItem, setRepairItem]= useState({});


    function showPrompt(param, items) {
        setRepairItem(n => items);
        if (param === "show"){
            setRemovePrompt("show");
        }
        if (param === "hide") {
            setRemovePrompt("hide")
        }
    }

    function priceFormat(param) {
        param = (param.replace("$", "")).replace(",", "");
        // alert(param);
        return parseInt(param);
    }

    // hello
    function toMoneyString(param){
        let newStr = "", revNewStr = "";
        let track = 1;
        for (let index = param.length-1; index >= 0; index--) {
            if (track % 4 === 0){
                newStr = newStr + "," + param[index]
            } else{
                newStr = newStr + param[index]
            }
            track++;
        }
        for (let index = newStr.length-1; index >= 0; index--) {
            revNewStr += newStr[index];
        }
        return revNewStr;
    }


    useEffect(()=>{
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        if(user.loggedIn === "true"){
            setIsSignIn(n => true);
            let cart = localStorage.getItem(user.email);
            try {
                cart = JSON.parse(cart);
                if (cart.length > 0){
                    setCartItems(cart);
                }
            } catch (error) {
                setCartItems([])
            }
        }
    },[]);
    let totalPrice = 0;
    if (cartItems.length > 0) {
        for(let items of cartItems) {
            if (items.objectId) {
                totalPrice += priceFormat(items.Price) * parseInt(items.Count);
            } else{
                if (items.location === "Home Service"){
                    totalPrice += priceFormat(items.Price.home);
                } else{
                    totalPrice += priceFormat(items.Price.workshop);
                }
            }
        }
        setCartTotalPrice(totalPrice);
    }else{
        setCartTotalPrice(0)
    }

    let flag;
    try {
        if (cartItems.length > 0) {
            flag = "yes";
        }
    } catch (error) {
        flag = "no";
    }

    return (
    <>
        { removePrompt === "show" && <RemovePrompt setRemovePrompt={setRemovePrompt} cartItems={cartItems} setCartItems={setCartItems} repairItem={repairItem} setRepairItem={setRepairItem} tag="Repairs" /> }
        <BackToTop />
        <h1 className='font-bold text-xl text-center'>CART</h1>
        <div className='border-2 border-black m-2'></div>
        <ul className='pb-20'>
            { flag === "yes" && cartItems.length > 0  ? 
                cartItems.map( items => {
                    if (items.objectId) {
                        // setCartTotalPrice(cartTotalPrice + priceFormat(items.Price))
                        return <CartInfo key={items.objectId} salesInfo={items} image={items.url} setCartItems={setCartItems} cartItems={cartItems} setCount={setCount} cartCount={cartCount} setCartTotalPrice={setCartTotalPrice} priceFormat={priceFormat} />
                    } else if (items.title) {
                        return (
                            <>
                                {/* {items.location === "Home Service" && setCartTotalPrice(priceFormat(items.Price.home))} */}
                                {/* {items.location === "Workshop Service" && setCartTotalPrice(priceFormat(items.Price.workshop))} */}
                                <div className=' w-80 h-[32rem] mx-auto mb-10 px-3 py-2 pb-3 rounded-lg border-4 border-purple-900 space-y-2'>
                                {/* "price": {"home": "# 150,000", "workshop": "# 100,000"} */}
                                    <p className='text-purple-900 text-md text-center font-roboto font-bold -mb-2'>{items.title}</p>
                                    <div className='border-2 border-violet-700 flex'></div>
                                    <p className='font-bold text-purple-800 text-lg text-center'>{items.year + " " + items.make + " " + items.model + " " + items.category}</p>
                                    <p className='border-4 border-purple-900 rounded-xl font-bold text-black p-2 w-20 text-center mx-auto'>{items.tag}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Date: </span>{items.date}<span className='ml-3'>(YYYY-MM-DD)</span></p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Time: </span>{items.time}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Client Name:</span> {items.name}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Phone:</span> {items.phone}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>E-mail:</span> {items.email}</p>
                                    <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Location:</span> {items.location}</p>
                                    {items.address && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Address:</span> {items.address}</p>}
                                    {(items.price && items.location === "Home Service") && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Price</span> {items.Price.home}</p> }
                                    {(items.price && items.location === "Workshop Service") && <p className='p-1 bg-violet-400 rounded text-white font-bold font-mono '><span className='text-purple-900'>Price</span> {items.Price.workshop}</p> }
                                    <div className='text-center flex w-40 mx-auto justify-center'>
                                        <Remove showPrompt={showPrompt} items={items} />
                                    </div>
                                   
                                </div>
                            </>
                        )
                    }
                } )
                 : 
                <h2 className='text-black text-4xl font-bold text-center font-roboto'>No Items Yet</h2>
            }
            <div className='mt-5 mb-20'>
                <p className='w-80 mx-auto bg-green-100 rounded p-1 text-center text-green-600 font-medium text-lg'>Total: ${toMoneyString(cartTotalPrice.toString())}</p>
                {cartTotalPrice > 0 && <div className=' text-center w-full p-2' ><button className='w-80 h-12 rounded bg-slate-300 text-purple-900 font-bold font-roboto m-2'>MAKE PAYMENT</button></div>}
            </div>
            
        </ul>
        {/* <p>Total: {cartTotalPrice}</p> */}
    </>
    )
}

export default Cart;