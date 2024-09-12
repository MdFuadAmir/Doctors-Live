import bannerimg from"../../../assets/assets_frontend/header_img.png"
import grouphoto from"../../../assets/assets_frontend/group_profiles.png"
import { FaLongArrowAltRight } from "react-icons/fa";
const Header = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-4 md:px-10 my-12">
            {/* -----------Left side--------  */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">Book Appointment <br />
                With Trusted Doctors</h1>
                <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                    <img src={grouphoto} alt="" className="w-28"/>
                    <p>Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block"/>
                    schedule your appointment hassle-free.</p>
                </div>
                <button className="flex gap-2 items-center bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300">
                    Book Appointment <FaLongArrowAltRight/>
                </button>
            </div>
            {/* -----------right side--------  */}
            <div className="w-1/2 relative">
                <img src={bannerimg} alt="" className="w-full md:absolute bottom-0 h-auto rounded-lg"/>
            </div>
         
        </div>
    );
};

export default Header;