import { useState } from "react";
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const Items = <>
    <div className="h-full lg:hidden block absolute top-16 w-full text-white right-0 left-0 bg-slate-800 transition">
        <ul className="text-center text-xl p-20">
            
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Men</li>
          
          
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Women</li>
           
         
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Children</li>
         
        </ul>
    </div>
    </>
  return (
    <div className="">
        <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 flex-1">
            <div className="flex items-center flex-1">
                <span>
                    <h1 className="text-3xl font-bold text-blue-600">PLEASING MART</h1>
                </span>
            </div>
            <div className="lg:flex lg: flex-1 items-center justify-end font-normal hidden">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                   
                       
                     
                            <li className="cursor-pointer">Men</li>
                       
                       
                            <li className="cursor-pointer">Women</li>
                        
                       
                            <li className="cursor-pointer">Children</li>
                       
                    </ul>
                </div>
            </div>
            <div>
                {click && Items}
            </div>
            <button className="block lg:hidden transition text-red" onClick={handleClick}>
                {click ? <FaTimes/> : <CiMenuFries/>}
            </button>
        </div>
    </div>
  );
};

export default Navbar;
