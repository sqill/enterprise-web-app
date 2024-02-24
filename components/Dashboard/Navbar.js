import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useStore } from '../../lib/store'
import React from 'react'
import Popper from '../Popper';

import { logout } from '../../api'

function Drop({ user, onLogout }) {
  return (
    <div className="block bg-white text-base list-none divide-y divide-gray-100 rounded shadow">
      <div className="px-4 py-3">
        <span className="block text-sm font-medium text-gray-900 font-bold">Company</span>
        <span className="block text-sm">{user.entity.company.name}</span>
      </div>
      <div className="px-4 py-3">
        <span className="block text-sm">{user.entity.full_name}</span>
        <span className="block text-sm font-medium text-gray-900 truncate">{user.email}</span>
      </div>
      <ul className="py-1" aria-labelledby="dropdown">
        <li>
          <button onClick={onLogout} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 w-full text-left">Sign out</button>
        </li>
      </ul>
    </div>
  )
}

export default function Nav({ onClick }) {
  const router = useRouter()
  const { auth: { user }, setCurrentUser } = useStore()

  async function doLogout() {
    await logout();
    setCurrentUser(null)
  }

  const avatar = user.entity.avatar?.thumb

  return (
    <nav className="bg-white fixed w-full h-20 py-1" style={{zIndex:"80"}}>
      <div className="px-3 py-3 lg:px-5 lg:pl-3 h-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button onClick={onClick} id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
              <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <a href="" className="text-xl flex items-center  px-12">
              <img src="/images/cutLogo.png" alt="Login Image" className='max-h-7 px-3' />
              <span className='self-center whitespace-nowrap'>Brand Lab</span>
            </a>
          </div>
          <div className="flex items-center px-10">
            <Popper content={() => <Drop user={user} onLogout={doLogout} />}>
              <div className="mr-3 md:mr-0 flex text-xs rounded-full p-1 items-center hover:bg-gray-100" aria-expanded="false">
                <span className="ml-2 font-light text-textGray">{user.entity.full_name}</span>
                {avatar && <img className="ml-2 h-8 w-8 rounded-full" src={avatar} alt="user photo" />}
              </div>

            </Popper>
          </div>
        </div>
      </div>
    </nav>
  )
}
