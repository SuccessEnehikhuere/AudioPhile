import { useState } from 'react'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Home, HomeLayout} from './pages'

const router = createBrowserRouter([
 {
  path: '/',
  element: <HomeLayout/>,
  children: [
    {
      index: true,
      element: <Home/>
    }
  ]
 }
])



const App = ()=>{
  return (
    <RouterProvider router={router} />
  )
}

export default App
