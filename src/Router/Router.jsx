import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Doctors from "../Pages/Doctors";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import MyProfile from "../Pages/MyProfile";
import MyAponment from "../Pages/MyAponment";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/doctors",
                element:<Doctors/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/myprofile",
                element:<MyProfile/>
            },
            {
                path:"/myapoinment",
                element:<MyAponment/>
            },
        
        ]
    }
])
export default router;