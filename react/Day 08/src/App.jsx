import React from 'react'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "*",
          element: <h1 className='text-2xl py-4'>Not Found </h1>
        }
      ]

    },

  ])
  return (
    <RouterProvider router={routers} />
  )
}
