import React from 'react';
import car1 from '../car1.jpg';
import LuggageIcon from '@mui/icons-material/Luggage';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function RentalComp({item, image, setSalesInfo}) {
  return (
    <div onClick={()=>setSalesInfo(item)} className='hover:bg-green-300 active:bg-green-500 text-center w-80 mb-5 border-2 border-purple-700 rounded-lg overflow-hidden'>
        <div className='w-80 overflow-hidden'>
            {item.url ? <img src={item.url} className='w-80 border-b-2 border-black' /> : <img src={image} className='w-80 border-b-2 border-black' /> }
        </div>
        <div className='p-2 space-y-1'>
            <h2 className='font-bold text-purple-800 text-lg'>{item.Year + " " + item.Make + " " + item.Model + " " + item.Category}</h2>
            { item.Transmission && <p className='font-bold text-slate-800'>No Of Seats : {item.Seats}</p>}
            <div className='w-40 mx-auto '>
            { item.Color && 
                <div className='space-x-2 flex justify-between'>
                    <div className='w-10 inline-block text-center'>
                        <LuggageIcon />
                    </div>
                    <div className='w-full'>
                        <p className='font-bold text-slate-800 inline-block font-roboto'>{item.Bags.Large + `${item.Bags.Large > 1 ? " Large Bags" : " Large Bag" }`}</p>
                    </div>
                    
                </div>
            }
            { item.Price && 
                <div className='space-x-2 flex justify-between'>
                    <div className='w-10 inline-block text-center'>
                        <WorkOutlineIcon />
                    </div>
                    <div className='w-full'>
                        <p className='font-bold text-slate-800 inline-block font-roboto'>{item.Bags.Small + `${item.Bags.Small > 1 ? " Small Bags" : " Small Bag" }`}</p>
                    </div>
                </div>
            }
            </div>
           
        </div>
    </div> 
)
}

export default RentalComp;