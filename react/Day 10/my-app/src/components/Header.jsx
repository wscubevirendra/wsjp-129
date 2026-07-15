import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='w-full py-4 px-2 bg-black  flex justify-between text-white shadow-xl'>
        <div>Logo</div>
        <ul className='flex gap-10'>
            
            <li> <Link href="/">Home</Link></li>
            <li> <Link href="/about">About</Link></li>
            <li> <Link href="/contact">Contact</Link></li>
         
           
        </ul>
    </div>
  )
}
