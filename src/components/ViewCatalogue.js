import { NavLink } from 'react-router-dom';

export default function ViewCatalogue() {
    return  (
        <div className=' border-4 border-white w-full mx-auto md:w-full'>
            <NavLink to="/services" className=' block font-bold text-gray-200 p-2 hover:bg-violet-800 md:text-lg'>VIEW CATALOGUE</NavLink>
        </div>
    );
}