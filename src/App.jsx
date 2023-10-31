
import AppLayout from './AppLayout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home  from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import  ResetPassword  from './Pages/ResetPassword'
import  Register  from './Pages/Register'
import  LoginPage  from './Pages/LoginPage'


 const App = () => {
  const router = createBrowserRouter([
    {
       element:<AppLayout/>,
       errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>, 
        },
              {
              path:'/login',
              element:<LoginPage/>
              },
           
              {
                path:'/resetPassword',
                element:<ResetPassword/>
                },
                {
                  path:'/register',
                  element:<Register/>
                  }
                  
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App