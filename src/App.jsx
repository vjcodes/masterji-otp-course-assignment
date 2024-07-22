import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import OtpPage from "./pages/OtpPage"

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Navigate to="/otp-form" />
  // },
  {
    path: '/otp-form',
    element: <OtpPage />
  },
  {
    path: '*',
    element: <Navigate to="/otp-form" />
  },
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App