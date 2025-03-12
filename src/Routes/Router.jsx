import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About/About";
import Tech from "../pages/Tech/Tech/Tech";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/about',
            element:<About></About>

        },
        {
            path:'/technology',
            element:<Tech></Tech>

        }
      ]

      
    },
  ]);