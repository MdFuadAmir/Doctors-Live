import { Outlet } from "react-router-dom";
import Navber from "../Comopnents/Navber/Navber";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Navber/>
            <Outlet/>
        </div>
    );
};
export default Root;