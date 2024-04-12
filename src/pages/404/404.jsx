import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-red-500 text-white font-bold'>
        <Helmet>
            <title>NestifyHub || 404 Page Not Found</title>
        </Helmet>
      <div className="text-center">
        <h1 className="text-9xl font-extrabold">404</h1>
        <p className="my-5">We Are Sorry But The Page You Requested Was Not Found!!</p>
        <Link to={-1}><button className='bg-white text-black p-5 border-yellow-50 rounded-3xl'>Go Previous Page</button></Link>
      </div>
    </div>
  )
}

export default ErrorPage