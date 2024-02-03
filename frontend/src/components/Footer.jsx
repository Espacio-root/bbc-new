import React from 'react'
import Image from 'next/image'

function Footer() {

    const data = [{ title: 'MapMed', links: ['Start Trial', 'Pricing', 'Download'] },
    { title: 'Resources', links: ['Blog', 'Help Center', 'Release Notes', 'Status'] },
    { title: 'Community', links: ['Tiwtter', 'LinkedIn', 'Facebook', 'Dribble', 'Podcast'] },
    { title: 'Company', links: ['About Us', 'Careers', 'Legal'] }]

    return (
        <div className='w-full bg-black text-white flex gap-5 px-24 py-6 justify-between mt-24'>
            <div className='flex flex-row justify-evenly items-center pt-8 w-full'>

                <div className='flex flex-col items-start'>
                    <h1 className='text-2xl font-bold tracking-wide'>Contact Us</h1>
                    <p className='text-lg font-bold tracking-wide'>example@xyz.com</p>
                </div>

                <div className='flex flex-col items-start mt-12'>
                    <div className='flex flex-row gap-2 justify-center items-center'>
                        <Image src='/logo.png' height='72' width='72'/>
                        <p className='text-2xl font-bold pr-8'>MapMed</p>
                    </div>
                    <p>
                        MapMed, Hackathon. <br />
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Footer