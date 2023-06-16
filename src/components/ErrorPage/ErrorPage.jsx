import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../assets/ErrorElement/36395-lonely-404.json'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       <img src={errorImg} alt="" />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-green-500'>
            <span className='sr-only'>Error</span>
            <span className=''>{status || 404}</span>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
            Not Found Page
          </p>
          <Link to='/' className='btn'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
