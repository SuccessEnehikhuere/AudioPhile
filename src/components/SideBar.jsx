import React from 'react'
import music from '../assets/images/pexels.jpg'
import SidebarMenu from './SidebarMenu'
import { MdDashboard } from 'react-icons/md'
import { FaGripfire } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { IoLibrarySharp } from 'react-icons/io5'
import { MdFavorite } from 'react-icons/md'
import { FaSignOutAlt } from 'react-icons/fa'




const SideBar = () => {
  return (
    <main className="bg-stone-300 h-screen w-[100px] rounded-l-3xl flex flex-col  items-center py-2 justify-between">
      <div>
        <img src={music} className="h-8 w-8 rounded-full" />
      </div>
      <div>
        <SidebarMenu title="feed" to="/feed" icon={<MdDashboard />} />
        <SidebarMenu title="trending" to="/feed" icon={<FaGripfire />} />
        <SidebarMenu title="player" icon={<FaPlay />} />
        <SidebarMenu title="favourites" icon={<MdFavorite />} />
        <SidebarMenu title="library" icon={<IoLibrarySharp />} />
      </div>
      <div>
        <SidebarMenu title='signout' to='' icon={< FaSignOutAlt/>}/>
      </div>
    </main>
  )
}

export default SideBar