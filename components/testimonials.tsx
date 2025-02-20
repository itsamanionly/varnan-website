import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Testimonials = () => {
    return (
        <section className='py-10 text-center'>
            <h2 className='text-2xl md:text-4xl lg:hidden py-10 font-bold text-gray-600'>Trusted by world class AI teams</h2>
            <div className='flex items-center lg:max-w-[70%]  mx-auto justify-center mb-4 lg:mb-10 lg:px-8 gap-4  lg:gap-10'>
                <Card className='w-[130px] lg:w-[250px] lg:h-[90px]'>
                    <Image src="/tipsy-1.jpg" width={180} height={100} alt="bluelearn" className='grayscale object-cover w-full' />
                </Card>
                <Card className='w-[130px] lg:w-[230px] lg:h-[90px]'>
                    <Image src="/hsbc.png" width={120} height={100} alt="bluelearn" className='grayscale object-cover w-full' />
                </Card>
                <Card className='w-[90px] lg:w-[250px] lg:h-[90px]'>
                    <Image src="/iffort-1.png" width={150} height={100} alt="bluelearn" className='grayscale object-cover' />
                </Card>
            </div>
            <div className='flex items-center lg:max-w-[70%]  mx-auto  justify-center lg:justify-between lg:px-8 flex-grow flex-wrap gap-4 lg:gap-10'>
                <Card className='w-[90px] lg:w-[100px] lg:h-[80px]'>
                    <Image src="/tecon.png" width={90} height={100} alt="bluelearn" className='grayscale object-cover' />
                </Card>
                <h2 className='text-3xl md:text-4xl hidden lg:block font-bold text-gray-600'>Trusted by world class AI teams</h2>
                <Card className='w-[90px] lg:w-[110px] lg:h-[80px]'>
                    <Image src="/mastercard.svg" width={150} height={100} alt="bluelearn" className='grayscale ' />
                </Card>
            </div>
        </section>
    )
}

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn('flex items-center justify-center px-4  h-[50px] border border-gray-300 rounded-lg w-[130px]', className)}>
            {children}
        </div>
    )
}