import { MdDashboard } from 'react-icons/md'
import { FaGripfire } from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa'
import { IoLibrarySharp } from 'react-icons/io5'
import { MdFavorite } from 'react-icons/md'
import { IconContext } from 'react-icons'

import React from 'react'
import { Link } from 'react-router-dom'

function SidebarMenu(props) {
  return (
    <Link to={props.to}>
      <div className="flex flex-col items-center capitalize pt-2 ">
        <IconContext.Provider value={{size:'24px'}} >
          {props.icon}
          <p className='py-0'>
            {props.title}
          </p>
        </IconContext.Provider>
      </div>
    </Link>
  )
}

export default SidebarMenu
