import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './layouts/Layout.jsx'
import Home from './pages/index/Home.jsx'
import Cities from './pages/cities/Cities.jsx'
import Login from './pages/login/Login.jsx'
import PageNotFound from './pages/notFound/PageNotFound.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cities', element: <Cities /> },
      { path: '/login', element: <Login /> },
    ]
  },
  { path: '*', element: <PageNotFound /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
