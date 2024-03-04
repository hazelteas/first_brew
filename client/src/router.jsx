import { createBrowserRouter, redirect } from "react-router-dom"
import Home from "./page/Home"
import LoginPage from "./page/LoginPage"




const router =  createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        
    },
    {
        path : "/login",
        element: <LoginPage/>,
    },
  //   {
  //       path : "/addUser",
  //       // element: <addUser/>,
  //   },
  //   {
  //       path : "/getAllUser",
  //       // element : <GetAllUser/>
  //   },
  //   {
  //       path : "/getAllUser/:id",
  //       // element : <EditForm/>,
  //   },
  //   {
  //     path : "/getAllUser/:id/delete",
  //     // element : <EditForm/>,
  // },
])

export default router