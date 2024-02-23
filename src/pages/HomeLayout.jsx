import React from 'react'
import {SideBar} from '../components'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <main className="flex bg-stone-300 rounded-l-[30px] h-screen">
      <SideBar />
      <div className="bg-slate-500  rounded-[30px] w-full">
        <Outlet />
      </div>
    </main>
  )
}

export default HomeLayout