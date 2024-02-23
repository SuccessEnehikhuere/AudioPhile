import { useState } from 'react'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Favourites, Feed, Home, HomeLayout, Library, SignIn, SignOut, Trending} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'feed',
        element: <Feed />,
      },
      {
        path: 'trending',
        element: <Trending />,
      },
      {
        path: 'favourites',
        element: <Favourites/>,
      },
      {
        path: 'library',
        element: <Library />,
      }  
    ],
  },
  {
    path:'signin',
    element: <SignIn />
  },
  {
    path: 'signout',
    element: <SignOut/>
  }
])



const App = ()=>{
  return (
    <RouterProvider router={router} />
  )
}

export default App
