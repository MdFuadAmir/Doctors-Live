import Speciality from "../Comopnents/ Speciality/ Speciality";
import Banner from "../Comopnents/Banner/Banner";
import Header from "../Comopnents/Navber/Header/Header";
import TopDoctors from "../Comopnents/TopDoctors/TopDoctors";


const Home = () => {
    return (
        <div>
            <Header/>
            <Speciality/>
            <TopDoctors/>
            <Banner/>
        </div>
    );
};

export default Home;