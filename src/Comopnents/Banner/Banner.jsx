import bannerimg from"../../assets/assets_frontend/appointment_img.png"

const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row  gap-6 items-center justify-center px-4 md:px-12 bg-primary/60 rounded-xl">
                <div className="w-full md:w-1/2 space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold font-mono text-white">Book Appointment With 100+ Trusted Doctors</h1>
                    <button className="flex gap-2 items-center bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300">
                    Creat Account
                </button>
                </div>
                <div className="w-full md:w-1/2">
                <img src={bannerimg} alt="" className="w-[400px]"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;