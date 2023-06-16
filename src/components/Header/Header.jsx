import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { FaRebel } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {

    logOut()
        .then(() => {

        })
        .catch(error => {
            console.log(error)
        })

}

  const navOptions = <>
    <li>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-800 font-semibold' : 'default')}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/register'
        className={({ isActive }) => (isActive ? 'text-blue-800 font-semibold' : 'default')}
      >
        Register
      </NavLink>
    </li>
    {
      user ? <>
        <li>
          <NavLink to='/login' onClick={handleLogOut}
            className={({ isActive }) => (isActive ? 'text-blue-800 font-semibold' : 'default')}>
            LogOut
          </NavLink>
        </li>
      </>
        : <>
          <li>
            <NavLink to='/login'
              className={({ isActive }) => (isActive ? 'text-blue-800 font-semibold' : 'default')}>
              Login
            </NavLink>
          </li>
        </>
    }
    <li>
      <NavLink
        to='/blog'
        className={({ isActive }) => (isActive ? 'text-blue-800 font-semibold' : 'default')}
      >
        Blog
      </NavLink>
    </li>
  </>

  return (
    <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          <FaRebel className='h-6 w-6 text-blue-500'></FaRebel>
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'><span className='text-amber-400'>Dream</span>Chef</span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          {navOptions}
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <FaRebel className='h-6 w-6 text-blue-500'></FaRebel>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'><span className='text-amber-400'>Dream</span>Chef</span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    {navOptions}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
