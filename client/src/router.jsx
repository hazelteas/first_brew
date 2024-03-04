import { createBrowserRouter, redirect } from "react-router-dom"
import Home from "./page/Home"
import LoginPage from "./page/LoginPage"
import AddUserPage from "./page/AddUserPage"
import UserPage from "./page/UserPage"
import FormEdit from "./components/FormEdit"

const mustLogin = () => {
    if(!localStorage.access_token) {
      return redirect('/login')
    }
    return null
  }
  
  const withLogin = () => {
    if(localStorage.access_token) {
      return redirect('/')
    }
    return null
  }


const router =  createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        
    },
    {
        path : "/login",
        element: <LoginPage/>,
        loader: withLogin
    },
    {
        path : "/addUser",
        element: <AddUserPage/>,
        loader: withLogin
    },
    {
        path : "/getUser",
        element : <UserPage/>
    },
    {
        path : "/getUser/:id",
        element: <FormEdit/>,
        loader: withLogin
    },
    // {
    //   path : "/getAllUser/:id/delete",
    //   // element : <EditForm/>,,
    // }
])

export default router