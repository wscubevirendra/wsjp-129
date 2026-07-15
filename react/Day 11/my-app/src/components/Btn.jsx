'use client'

import React, { useState } from 'react'

export default function Btn() {
    const [count, setCount] = useState(0);
    return (
        <>
            <span className='text-3xl text-red-400'>{count}</span>
            <button onClick={() => setCount(count + 1)}>Book a Demo Now</button>
        </>
    )
}
