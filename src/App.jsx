import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import Hero from './pages/index/Hero'

const router = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: '/', element: <Hero /> }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
