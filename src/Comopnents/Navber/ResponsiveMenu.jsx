import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
// #83C5BE
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
const ResponsiveMenu = ({open}) => {
    return (
        <AnimatePresence mode="wait">
        {
            open && (
                <motion.div
                initial={{opacity:0,y:-100}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-100}}
                transition={{duration:0.3}}
                className=" absolute top-20 left-0 w-full h-screen z-10"
                >
                    <div className="text-xl font-semibold uppercase bg-[#83C5BE] text-white py-10 m-6 rounded-3xl">
                        <ul className="flex flex-col justify-center items-center gap-10">
                            {
                                navberData.map((data) =>(<div key={data.id}>
                                    <li><Link to={data.path}>{data.name}</Link></li>
                                </div>))
                            }
                        </ul>
                    </div>

                </motion.div>
            )
        }

       </AnimatePresence>
    );
};

export default ResponsiveMenu;