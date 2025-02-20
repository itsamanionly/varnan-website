import React from 'react'
import Link from 'next/link';

export const Contact = () => {
    return (
        <div className="h-fit  w-full  bg-white  bg-dot-black/[0.5] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className='container mx-auto py-40 '>
                <div className='bg-white w-[80%] mx-auto text-center p-6 border rounded-lg drop-shadow-sm'>
                    <h2 className='text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-center'> The Future of Search is AI—Let's Get You There!
                    </h2>
                    <div className=" flex items-center justify-center mt-4">
                        <Link href="/">
                            <button
                                className="bg-gradient-to-br w-fit px-4 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                type="submit"
                            >
                                Get Started &rarr;
                                <BottomGradient />
                            </button>
                        </Link>
                    </div>
                    {/* <p className='mt-3 text-lg leading-relaxed tracking-tight text-slate-600  text-center'>
                        Let's start building today.
                    </p> */}
                    {/* <div className="w-[60%]  mx-auto mt-4 flex items-center justify-center gap-2 ">
                        <Input autoComplete='off' id="email" placeholder="projectmayhem@fc.com" type="email" className='w-[300px]' />
                        <button
                            className="bg-gradient-to-br w-fit px-4 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Get Started &rarr;
                            <BottomGradient />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};