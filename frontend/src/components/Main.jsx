import React from 'react'
import Image from 'next/image'

function Main() {

    const data = [{ image: 'https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png', title: 'Emergency Assistance', description: 'Instantly connect with emergency services or call for an ambulance with just a tap..' },
    { image: 'https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png', title: 'Hospital Locator', description: 'Find the closest hospitals based on your current location or search by specific criteria such as specialty or hospital name.' },
    { image: 'https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png', title: 'User-friendly Interface', description: 'Intuitive design for seamless navigation, ensuring quick access to vital information in critical situations.' },
    { image: 'https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png', title: 'Saved Favourites', description: 'Save frequently visited hospitals for even faster access during emergencies' },
    { image: '	https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png', title: 'Real-time Updates', description: 'Recieve live updates on wait times, ER availability, and more for informed decision-making' },
    { image: '	https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png', title: 'MapMed Support', description: 'Get in touch with a human' },
    ]

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-24 px-8 gap-x-24 gap-y-24'>
            {data.map((item, index) => {
                return (
                    <div key={index} className='flex items-start justify-center gap-4'>
                        <Image src={item.image} width='95' height='95'/>
                        <div className='flex flex-col h-auto gap-4'>
                            <h1 className='text-xl font-bold'>{item.title}</h1>
                            <p className='text-xl'>{item.description}</p>
                            <p className='text-blue-500 cursor-pointer hover:underline text-lg'>Learn More <span>&rarr;</span></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Main
