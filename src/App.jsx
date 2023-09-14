import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import userActions from './redux/actions/userActions'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.user_token())

  }, [])
  return (
    <RouterProvider router={router} />
  )
}

export default App
