import { createBrowserRouter } from "react-router-dom";
 import Home from "../Home/Home";
import Main from "../Layout/Main";
 import AllToys from "../Pages/AllToys/AllToys";
 import AddToys from "../Pages/AddToys/AddToys";
 import Login from "../Shared/LoginAndRegister/Login";
//import Register from "../Shared/LoginAndRegister/Register";
import Register from "../Shared/LoginAndRegister/Register";
 import PrivateRoute from "../Routes/PrivateRoute/PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
 import Blogs from "../Pages/Blogs/Blogs";
import UpdateMyToys from "../Pages/MyToys/UpdateMyToys";
 import AllToysDetails from "../Pages/AllToys/AllToysDetails/AllToysDetails";
 import About from "../Pages/About/About";
import ErrorBase from "../Components/ErrorBase/ErrorBase";
//import AllToys from "../Pages/AllToys/AllToys";
//import AddToys from "../Pages/AddToys/AddToys";

//TODO:IMPORT
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorBase></ErrorBase>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toys-marketplace-server-one.vercel.app/toysQuantity')
            },
            {
                path: '/addToys',
                // element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
                element: <AddToys></AddToys>,
                
            },
            {
                path: '/myToys',
                // element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
                element: <MyToys></MyToys>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/register',
                element: <Register></Register>
            }
            ,
            {
                path: '/blogs',
                element: <Blogs></Blogs>

            },
            {
                path: '/about',
                element: <About></About>

            },
            {
                path: '/allToysDetails/:id',
                element: <PrivateRoute><AllToysDetails></AllToysDetails></PrivateRoute>,
                // loader: (params)=> fetch(`https://toys-marketplace-server-one.vercel.app/singleToys/${params.id}`)


            }

            , {
                path: '/updateMyToys/:id',
                element: <UpdateMyToys></UpdateMyToys>,
                loader: ({ params }) => fetch(`https://toys-marketplace-server-one.vercel.app/singleToys/${params.id}`)
            }

        ]
    }
])



export default router