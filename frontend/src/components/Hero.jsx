'use client';
import React from 'react'
import {useRouter} from 'next/navigation'

function Hero() {

  const router = useRouter()

  return (
    <div className='h-[397px] bg-[#dadbf1] flex flex-row justify-evenly items-center px-12 mt-6'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <button className='button bg-[#68bfd3] hover:bg-[#dadbf1] rounded-full px-16 inline-block' onClick={() => router.push('/tracker')}>
          <p className='text-lg font-bold'>Locate Nearest Hospital</p>
          <p className='text-sm text-gray-700'>find the closest hospital in your vicinity</p>
        </button>
        <button className='button bg-[#68bfd3] hover:bg-[#dadbf1] rounded-full px-16 inline-block' onClick={() => router.push('/chat')}>
          <p className='text-xl font-bold'>Chat With Bot</p>
          <p className='text-sm text-gray-700'>get quality advice from the finest chatbot</p>
        </button>
      </div>
      <img src='/hero.png' height='full' width='auto' />
    </div>
  )
}

export default Hero