import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import OtpPage from "./pages/OtpPage"
import CourseListPage from "./pages/CourseListPage"
import BatchesPage from "./pages/BatchesPage"

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
    path: '/course-list',
    element: <CourseListPage />
  },
  {
    path: '/batches',
    element: <BatchesPage />
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