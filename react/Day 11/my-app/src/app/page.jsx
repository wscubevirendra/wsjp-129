import { getProducts } from '@/api/api'
import Hero from '@/components/Hero'
import React from 'react'

export default async function home() {
  const response = await getProducts()
  return (
    <>
      <Hero />
      <ol>
        {
          response.data.map((data) => {
            return (
              <li>{data.title}</li>
            )
          })
        }
      </ol>
    </>
  )
}
