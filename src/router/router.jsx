import { createHashRouter } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/index/Home.jsx'
import Cities from '../pages/cities/Cities.jsx'
import Login from '../pages/login/Login.jsx'
import PageNotFound from '../pages/notFound/PageNotFound.jsx'
import DetailsPage from '../pages/details/DetailsPage'

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/cities', element: <Cities /> },
            { path: '/cities/:id', element: <DetailsPage /> },
            { path: '/login', element: <Login /> },
        ]
    },
    { path: '*', element: <PageNotFound /> }
])

export default router