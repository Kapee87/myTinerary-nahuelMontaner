import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/index/Home'
import Cities from '../pages/cities/Cities'
import Login from '../pages/login/Login'
import PageNotFound from '../pages/notFound/PageNotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/cities', element: <Cities /> },
            { path: '/login', element: <Login /> },
            { path: '*', element: <PageNotFound /> }
        ]
    }
])

export default router