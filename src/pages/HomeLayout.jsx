import React from 'react'
import {SideBar} from '../components'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <main className='flex'>
     <SideBar/>
     <Outlet/>
    </main>
  )
}

export default HomeLayout