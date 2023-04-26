import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import LogInLayout from "../layouts/LogInLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home/Home";
import ProductGroup from "../pages/ProductGroup/ProductGroup";


export default createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout/>,
        children: [
            {
                path:"/",
                element: <Home/>,
            },
            {
                path:"/home",
                element: <Home/>,
            },
            {
                path:"/productgroup",
                element: <ProductGroup/>,
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