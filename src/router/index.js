import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import LogInLayout from "../layouts/LogInLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";


export default createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout/>,
        children: [
            {
                path:"/",
                element: <Home/>,
            },
        ],
    },
    {
        path:"/auth",
        element: <LogInLayout/>,
        children: [],
    },
    {
        path:"/admin",
        element: <AdminLayout/>,
        children: [],
    }
]);