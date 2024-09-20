import { Outlet } from "react-router-dom";
import Navber from "../Comopnents/Navber/Navber";
import Footer from "../Comopnents/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
export default Root;