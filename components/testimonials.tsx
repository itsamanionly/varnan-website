import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Testimonials = () => {
    return (
        <div className="h-fit w-full bg-white bg-dot-black/[0.5] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='container mx-auto py-10 lg:py-20 z-50'>
                <h2 className='text-2xl md:text-4xl text-center lg:hidden font-bold text-gray-700'>Trusted by world class AI teams</h2>
                
                {/* First row of cards */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-auto mt-10 mb-4 lg:mb-10 max-w-4xl'>
                    <Card className='bg-white drop-shadow-sm'>
                        <Image 
                            src="/tipsy-1.jpg" 
                            width={150} 
                            height={100} 
                            alt="tipsy" 
                            className='grayscale object-contain w-auto h-auto max-w-full max-h-full' 
                        />
                    </Card>
                    <Card className='bg-white drop-shadow-sm'>
                        <Image 
                            src="/athina-ai.png" 
                            width={150} 
                            height={100} 
                            alt="athina ai" 
                            className='grayscale object-contain w-auto h-auto max-w-full max-h-full' 
                        />
                    </Card>
                    <Card className='bg-white drop-shadow-sm'>
                        <Image 
                            src="/unify-ai.svg" 
                            width={150} 
                            height={100} 
                            alt="unify ai" 
                            className='grayscale object-contain w-auto h-auto max-w-full max-h-full' 
                        />
                    </Card>
                    <Card className='bg-white drop-shadow-sm'>
                        <Image 
                            src="/Amdocs.png" 
                            width={150} 
                            height={100} 
                            alt="amdocs" 
                            className='grayscale object-contain w-auto h-auto max-w-full max-h-full' 
                        />
                    </Card>
                </div>
                
                {/* Second row of cards */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mx-auto mb-4 lg:mb-10 max-w-4xl'>
                    <Card className='bg-white drop-shadow-sm'>
                        <Image 
                            src="/langbase.svg" 
                            width={150} 
                            height={100} 
                            alt="langbase" 
                            className='grayscale object-contain w-auto h-auto max-w-full max-h-full' 
                        />
                    </Card>
                    <Card className='bg-white drop-shadow-sm'>
                        <Image 
                            src="/digital-ocean.svg" 
                            width={120} 
                            height={100} 
                            alt="digital ocean" 
                            className='grayscale object-contain w-auto h-auto max-w-full max-h-full' 
                        />
                    </Card>
                    <Card className='bg-white drop-shadow-sm'>
                        <Image 
                            src="/composio.svg" 
                            width={150} 
                            height={100} 
                            alt="composio" 
                            className='grayscale object-contain  h-auto max-w-full max-h-full' 
                        />
                    </Card>
                    <Card className='bg-white drop-shadow-sm'>
                        <Image 
                            src="/undermind.png" 
                            width={120} 
                            height={100} 
                            alt="undermind" 
                            className='grayscale object-contain w-auto h-auto max-w-full max-h-full' 
                        />
                    </Card>
                </div>
                <div className='flex items-center lg:max-w-[70%] mx-auto justify-center lg:justify-center lg:px-8 flex-grow flex-wrap gap-4 lg:gap-10'>
                    <h2 className='text-3xl md:text-4xl hidden lg:block font-medium text-gray-600'>Trusted by world class AI teams</h2>
                </div>
            </div>
        </div>
    )
}

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn('flex items-center justify-center px-4 h-[60px] lg:h-[80px] border border-gray-300 rounded-lg', className)}>
            {children}
        </div>
    )
}