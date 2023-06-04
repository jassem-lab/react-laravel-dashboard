import {createBrowserRouter} from "react-router-dom" ; 

const router = createBrowserRouter([
    {
        path : '/signup' , 
        element : <Signup />
    },
    {
        path : '/login' , 
        element : <Login />
    },
    {
        path : '/users' , 
        element : <Users />
    },
])

export default router ; 