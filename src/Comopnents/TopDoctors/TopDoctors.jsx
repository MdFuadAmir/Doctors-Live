import profile1 from"../../assets/assets_frontend/doc1.png"
import profile2 from"../../assets/assets_frontend/doc2.png"
import profile3 from"../../assets/assets_frontend/doc3.png"
import profile4 from"../../assets/assets_frontend/doc4.png"
import profile5 from"../../assets/assets_frontend/doc5.png"
import profile6 from"../../assets/assets_frontend/doc6.png"
import profile7 from"../../assets/assets_frontend/doc7.png"
import profile8 from"../../assets/assets_frontend/doc8.png"
import profile9 from"../../assets/assets_frontend/doc9.png"
import profile10 from"../../assets/assets_frontend/doc10.png"
import { GoDotFill } from "react-icons/go";
const doctorsList =[
    {
        id:1,
        img:profile1,
        activity:"Available",
        name:"Dr. Richard James",
        generel:"General physician"
    },
    {
        id:2,
        img:profile2,
        activity:"Available",
        name:"Dr. Emily Larson",
        generel:"Gynecologist"
    },
    {
        id:3,
        img:profile3,
        activity:"Available",
        name:"Dr. Sarah Patel",
        generel:"Dermatologist"
    },
    {
        id:4,
        img:profile4,
        activity:"Available",
        name:"Dr. Christopher Lee",
        generel:"Pediatricians"
    },
    {
        id:5,
        img:profile5,
        activity:"Available",
        name:"Dr. Jennifer Garcia",
        generel:"Neurologist"
    },
    {
        id:6,
        img:profile6,
        activity:"Available",
        name:"Dr. Andrew Williams",
        generel:"Gastroenterologist"
    },
    {
        id:7,
        img:profile7,
        activity:"Available",
        name:"Dr. Christopher Davis",
        generel:"General physician"
    },
    {
        id:8,
        img:profile8,
        activity:"Available",
        name:"Dr. Timothy White",
        generel:"Gynecologist"
    },
    {
        id:9,
        img:profile10,
        activity:"Available",
        name:"Dr. Amelia Hill",
        generel:"Dermatologist"
    },
    {
        id:10,
        img:profile9,
        activity:"Available",
        name:"Dr. Ava Mitchell",
        generel:"Dermatologist"
    },
]

const TopDoctors = () => {
    return (
        <div className="max-w-6xl px-4 mx-auto py-12">
            <div className="text-center">
                <h1 className="text-4xl font-mono font-bold">Top Doctors to Book</h1>
                <p className="text-sm font-thin py-4">Simply browse through our extensive list of trusted doctors.</p>
            </div>
            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    doctorsList.map((data) =>(<div key={data.id} className="border border-primary bg-primary/20 rounded-lg hover:scale-105 duration-300">
                        <img src={data.img} alt="" />
                        <div className="bg-white p-6 rounded-b-lg">
                            <p className="text-green-500 flex gap-2 items-center"><GoDotFill/>{data.activity}</p>
                            <h1 className="text-lg font-bold font-serif">{data.name}</h1>
                            <p className="text-sm text-gray-500">{data.generel}</p>
                        </div>
                        
                    </div>))
                }
                

            </div>
        </div>
    );
};

export default TopDoctors;