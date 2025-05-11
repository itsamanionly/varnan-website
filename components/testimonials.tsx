import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Testimonials = () => {
    return (
        <div className="h-fit  w-full  bg-white  bg-dot-black/[0.5] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='container mx-auto py-10 lg:py-20 z-50'>
                <h2 className='text-2xl md:text-4xl text-center lg:hidden font-bold text-gray-700'>Trusted by world class AI teams</h2>
                <div className='flex items-center lg:max-w-[70%] mt-10 lg:mt-0 mx-auto justify-center mb-4 lg:mb-10 lg:px-8 gap-4  lg:gap-10'>
                    <Card className='w-[130px] lg:w-[250px] lg:h-[90px] bg-white drop-shadow-sm'>
                        <Image src="/tipsy-1.jpg" width={120} height={100} alt="bluelearn" className='grayscale object-cover w-full' />
                    </Card>
                    <Card className='w-[130px] lg:w-[250px] lg:h-[90px] bg-white drop-shadow-sm'>
                        <Image src="/athina-ai.png" width={150} height={100} alt="bluelearn" className='grayscale object-cover w-full' />
                    </Card>
                    <Card className='w-[130px] lg:w-[250px] lg:h-[90px] bg-white drop-shadow-sm'>
                        <Image src="/unify-ai.svg" width={120} height={100} alt="bluelearn" className='grayscale object-cover w-full' />
                    </Card>
                </div>
                <div className='flex items-center lg:max-w-[70%]  mx-auto  justify-center lg:justify-center lg:px-8 flex-grow flex-wrap gap-4 lg:gap-10'>
                    <h2 className='text-3xl md:text-4xl hidden lg:block font-medium text-gray-600'>Trusted by world class AI teams</h2>
                    {/* <Card className='w-[90px] lg:w-[110px] lg:h-[80px] bg-white drop-shadow-sm'>
                        <Image src="/mastercard.svg" width={150} height={100} alt="bluelearn" className='grayscale ' />
                    </Card> */}
                </div>
            </div>
        </div>
    )
}

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn('flex items-center justify-center px-4  h-[50px] border border-gray-300 rounded-lg w-[130px]', className)}>
            {children}
        </div>
    )
}