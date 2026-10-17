import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function DashboardPg() {
  return (
    <div className='flex min-h-screen'>
      <div className='w-64 shrink-0'>
        <Sidebar/>
      </div>
      <div className='flex-1 min-w-0 overflow-x-hidden px-28 left-30'>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardPg