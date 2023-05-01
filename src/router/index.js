import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import LogInLayout from "../layouts/LogInLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home/Home";
import ProductGroup from "../pages/ProductGroup/ProductGroup";
import ProductType from "../pages/ProductType/ProductType";
import Producer from "../pages/Producer/Producer";
import ProductDetail from "../pages/ProductDetail/ProductDetail";


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
            {
                path:"/producer",
                element: <Producer/>,
            },
            {
                path:"/producttype",
                element: <ProductType/>,
            },
            {
                path:"/productdetail",
                element: <ProductDetail/>,
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