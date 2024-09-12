import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
//
const navberData =[
    {
        id:1,
        name:"Home",
        path:"/"
    },
    {
        id:2,
        name:"All Doctors",
        path:"/doctors"
    },
    {
        id:3,
        name:"About",
        path:"/about"
    },
    {
        id:4,
        name:"Contact",
        path:"/contact"
    },
]

const Navber = () => {
    const [open,setOpen] = useState(false);
    return (
        <>
        <nav>
            <div className="max-w-6xl mx-auto p-4 flex justify-between items-center border-b-2 border-black/30">
            {/* logo */}
            <div>
                <h1 className="text-xl font-mono font-bold text-[#83C5BE]">Doctors-<span className="text-red-500">Live</span></h1>
            </div>
            {/* menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-gray-800 font-semibold">
                    {
                        navberData.map((data) =>(<li key={data.id}><Link className="inline-block px-3 py-1 duration-300 hover:text-[#83C5BE]" to={data.path}>{data.name}</Link></li>))
                    }
                </ul>

            </div>
            {/* login btn */}
            <div className="hidden md:block">
                <button className="font-thin text-white rounded-full px-6 py-2 bg-[#83C5BE]">
                    Create account
                </button>
            </div>
            {/* mobile navber */}
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                <HiOutlineMenuAlt3 className="text-3xl"/>
            </div>
            </div>
        </nav>
        {/* monbile navber */}
        <ResponsiveMenu open={open}/>
        </>
            
    );
};

export default Navber;