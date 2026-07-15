import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Store from './pages/Store'
import Contact from './pages/Contact'
import ProductOverview from './pages/ProductOverview.jsx'
import Cart from './pages/Cart.jsx'


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
          path: "/store/:slug?",
          element: <Store />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/cart",
          element:<Cart/>
        },
        {
          path: "/product/overview/:id",
          element: <ProductOverview />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routers} />
  )
}
