'use client';

import React from 'react'
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()
    return (
        <nav className='bg-white text-black h-[88px] flex justify-between items-center px-20'>
            
            <div className='flex justify-center items-center hover:cursor-pointer' onClick={() => router.push('/')}>
                <img src='/logo.png' className='h-12' />
            </div>

            <div className='flex items-center justify-center gap-4 h-full'>
                <button className='button-ghost h-14' onClick={() => router.push('/tracker')}>Locate Hospital</button>
                <button className='button-ghost h-14' onClick={() => router.push('/chat')}>Chat With Bot</button>
            </div>
        </nav>
    )
}

export default Navbar