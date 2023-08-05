import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import Home from './pages/index/Home'
import Cities from './pages/cities/Cities'
import PageNotFound from './pages/notFound/PageNotFound'
import Login from './pages/login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cities', element: <Cities /> },
      { path: '/login', element: <Login /> }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
