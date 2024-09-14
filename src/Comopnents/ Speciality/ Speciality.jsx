import img1 from"../../assets/assets_frontend/download.svg"
import img2 from"../../assets/assets_frontend/Gynecologist-Av1zZu4d.svg"
import img3 from"../../assets/assets_frontend/download (1).svg"
import img4 from"../../assets/assets_frontend/Pediatricians-C6nmx5n8.svg"
import img5 from"../../assets/assets_frontend/Neurologist-CuaLxNpX.svg"
import img6 from"../../assets/assets_frontend/Gastroenterologist-CTgzRFeY.svg"

const specilityData =[
    {
        id:1,
        img:img1,
        name:"General physician",
    },
    {
        id:2,
        img:img2,
        name:"Gynecologist",
    },
    {
        id:3,
        img:img3,
        name:"Dermatologist",
    },
    {
        id:4,
        img:img4,
        name:"Pediatricians",
    },
    {
        id:5,
        img:img5,
        name:"Neurologist",
    },
    {
        id:6,
        img:img6,
        name:"Gastroenterologist",
    },
]
const  Speciality = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex items-center justify-center flex-col text-center">
                <h1 className="text-4xl font-mono font-bold mb-2">Find by Speciality
                </h1>
                <p className="text-sm font-thin">Simply browse through our extensive list of trusted <br /> doctors, schedule your appointment hassle-free.</p>
            </div>
            <div className="py-12 flex flex-col md:flex-row gap-6 justify-center">
                {
                    specilityData.map((data) =>(<div key={data.id} className="flex flex-col items-center gap-4 hover:scale-105 duration-300">
                        <img src={data.img} alt="" className="w-24"/>
                        <p>{data.name}</p>
                        
                    </div>))
                }
            

            </div>
        </div>
    );
};

export default  Speciality;