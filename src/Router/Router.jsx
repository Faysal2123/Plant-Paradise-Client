import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Component/Home/Home";
import Shop from "../Pages/Shop";
import Page from "../Pages/Page";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Contact from "../Pages/Contact";
import PlantDetails from "../Component/Home/PlantDetails";
import { param } from "framer-motion/client";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            },
            {
                path:'/page',
                element:<Page></Page>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
               path:'/plant/:id',
               element:<PlantDetails></PlantDetails>,
               loader:({params})=>fetch(`http://localhost:5000/plants/${params.id}`)
            },
            {
               path:'/contact',
               element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
export default router