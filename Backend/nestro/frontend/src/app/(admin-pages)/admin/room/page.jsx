import { fetchCategory } from '@/api/api'
import React from 'react'

export default async function page() {
    const response=await fetchCategory();
    console.log(response)
  return (
    <div>page</div>
  )
}
