import { NavLink } from 'react-router-dom';

export default function ViewCatalogue() {
    return  (
        <div className=' border-4 border-white w-full mx-auto md:w-full
        lg:border-gray-900 
        '>
            <NavLink to="/services" className=' block font-bold text-gray-200 p-2 hover:bg-violet-800 md:text-lg 
            lg:text-gray-900 lg:hover:bg-gray-900 lg:hover:text-slate-200 "
            '>VIEW CATALOGUE</NavLink>
        </div>
    );
}