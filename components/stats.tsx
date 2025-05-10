import Image from 'next/image'

export const Stats = () => {
    return (
        <section className='py-10 lg:pt-20 lg:pb-0'>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10  lg:gap-20">
                <div className='w-full space-y-6'>
                    <h2 className='text-5xl text-center lg:text-left font-bold tracking-tighter  md:text-6xl lg:text-[6.5rem]'>
                        Why Do AI SEO
                    </h2>
                    <p className='md:text-xl text-center lg:text-left text-gray-500 lg:ml-4'>
                        Data proves it—AI search is not the future, it&apos;s already here.
                    </p>
                </div>
                <div className='flex items-center flex-col gap-6 '>
                    <div className='flex items-center'>
                        <div className='size-[60px] md:size-[80px]'>
                            <Image src="/perplexity.png" width={100} height={100} alt="perplexity" />
                        </div>
                        <div className='-ml-2 md:-ml-3 size-[60px] md:size-[80px]'>
                            <Image src="/chatgpt.png" width={100} height={100} alt="chatgpt" className='rounded-xl md:rounded-2xl' />
                        </div>
                        <div className='bg-gray-100 rounded-xl md:rounded-2xl p-2 size-[60px] md:size-[80px] -ml-2 md:-ml-3'>
                            <Image src="/gemini.png" width={80} height={80} alt="gemini" />
                        </div>
                        <div className='bg-gray-200 rounded-xl md:rounded-2xl p-2 size-[60px] md:size-[80px] -ml-2 md:-ml-3'>
                            <Image src="/azure.png" width={80} height={80} alt="azure" />
                        </div>
                        <div className='bg-gray-300 rounded-xl md:rounded-2xl p-2 size-[60px] md:size-[80px] -ml-2 md:-ml-3'>
                            <Image src="/anthropic.png" width={80} height={80} alt="anthropic" />
                        </div>
                        <div className='bg-gray-200 rounded-xl md:rounded-2xl p-2 size-[60px] md:size-[80px] flex items-center justify-center -ml-2 md:-ml-3'>
                            <Image src="/amazon.png" width={100} height={120} alt="amazon" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around gap-6 lg:gap-10 mt-10 max-w-5xl mx-auto'>
                <div className='w-full md:w-[60%] group hover:scale-[1.02] hover:bg-black hover:drop-shadow hover:text-white transition duration-300 ease-in-out text-center h-52 flex flex-col items-center justify-center gap-2 rounded-lg shadow border-0 animated-border'>
                    <h3 className='text-2xl font-semibold'>AI Search Adoption is Soaring</h3>
                    <h2 className=' text-6xl font-semibold'>90M+</h2>
                    <p className='text-gray-500 text-lg group-hover:text-white'>users will rely on AI search by 2027.</p>
                </div>
                <div className='w-full md:w-[40%] group hover:scale-[1.02] hover:bg-black hover:drop-shadow hover:text-white transition duration-300 ease-in-out text-center h-52 flex flex-col items-center justify-center gap-2 rounded-lg border-0 animated-border shadow'>
                    <h3 className='text-2xl font-semibold'>Google Search is Declining
                    </h3>
                    <h2 className=' text-6xl font-semibold'>25%</h2>
                    <p className='text-gray-500 text-lg group-hover:text-white'>
                        drop in traditional search usage by 2026.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around gap-6 lg:gap-10 mt-6 lg:mt-10 max-w-5xl mx-auto'>
                <div className='w-full md:w-[40%] group hover:scale-[1.02] hover:bg-black hover:drop-shadow hover:text-white transition duration-300 ease-in-out text-center h-52 flex flex-col items-center justify-center gap-2 rounded-lg border-0 animated-border shadow'>
                    <h3 className='text-2xl font-semibold'>
                        Gen Z Prefers AI Search
                    </h3>
                    <h2 className=' text-6xl font-semibold'>45%</h2>
                    <p className='text-gray-500 text-lg group-hover:text-white'>of Gen Z skips Google for AI tools.</p>
                </div>
                <div className='w-full md:w-[60%] group hover:scale-[1.02] hover:bg-black hover:drop-shadow hover:text-white transition duration-300 ease-in-out text-center h-52 flex flex-col items-center justify-center gap-2 rounded-lg shadow border-0 animated-border'>
                    <h3 className='text-2xl font-semibold text-center'>Zero-Click Searches Hurt Businesses
                    </h3>
                    <h2 className=' text-6xl font-semibold'>58.5%</h2>
                    <p className='text-gray-500 text-lg group-hover:text-white'>
                        of Google searches result in no clicks.
                    </p>
                </div>
            </div>
        </section>
    )
}