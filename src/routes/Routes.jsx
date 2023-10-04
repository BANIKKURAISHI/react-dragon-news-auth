import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Reg from "../pages/Login/Reg";
import News from "../pages/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/news.json')
            },
           
            {
                path: '/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute> ,
                loader:()=>fetch('/news.json')
            },

            {
                path:"/in",
                element:<Login></Login>
            },
            {
                path:"/reg",
                element:<Reg></Reg>
            }
        ]
    }    
]);

export default router;