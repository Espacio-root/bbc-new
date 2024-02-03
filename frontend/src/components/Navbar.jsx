'use client';

import React from 'react'
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()
    return (
        <nav className='bg-white text-black h-[88px] flex justify-between items-center px-20'>
            
            <div className='flex justify-center items-center hover:cursor-pointer' onClick={() => router.push('/')}>
                <img src='/logo.png' className='h-8' />
                <p className='text-2xl font-semibold relative before:absolute before:border-black before:top-[-4px] before:left-[-4px] before:border-l-[3px] before:inset-0 before:content=""'>Help Center</p>
            </div>

            <div className='flex items-center justify-center gap-4 h-full'>
                <button className='button-ghost h-14'>Submit a request</button>
                <button className='button h-14'>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar