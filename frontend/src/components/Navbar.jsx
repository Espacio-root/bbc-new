'use client';

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Navbar() {
    const router = useRouter()
    return (
        <nav className='bg-white text-black h-[88px] flex justify-between items-center px-20'>
            
            <div className='flex justify-center items-center hover:cursor-pointer' onClick={() => router.push('/')}>
                <Image src='/logo.png' height='72' width='72'/>
                <p className='text-2xl font-bold pr-8'>MapMed</p>
                <p className='text-2xl font-semibold relative before:absolute before:top-[-4px] before:left-[-20px] before:border-l-[3px] before:inset-0 before:content=""'>Help Center</p>
            </div>

            <div className='flex items-center justify-center gap-4 h-full'>
                <button className='button-ghost h-14'>Submit a request</button>
                <button className='button h-14'>Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar