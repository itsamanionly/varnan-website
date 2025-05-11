import React from 'react'

export const Hero = () => {
    return (
        <section className='pt-10 lg:pt-28'>
            <h1 className="text-balance z-50 text-center text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl ">
                You Build the AI
                <br className="block " />
                We Launch it to the {" "}
                <span className="inline-flex overflow-hidden relative bg-white mt-1.5 px-1">
                    <span className="gradient-text">World.</span>
                    <div className="aurora absolute inset-0 pointer-events-none mix-blend-lighten opacity-50">
                        <div
                            className="aurora__item absolute w-[60vw] h-[60vw]"
                            style={{
                                backgroundColor: "hsl(var(--color-1))",
                                filter: "blur(1rem)",
                                animation: "aurora-border 6s ease-in-out infinite, aurora-1 12s ease-in-out infinite alternate",
                                mixBlendMode: "overlay",
                                top: "-50%",
                            }}
                        ></div>
                        <div
                            className="aurora__item absolute w-[60vw] h-[60vw]"
                            style={{
                                backgroundColor: "hsl(var(--color-2))",
                                filter: "blur(1rem)",
                                animation: "aurora-border 6s ease-in-out infinite, aurora-2 12s ease-in-out infinite alternate",
                                mixBlendMode: "overlay",
                                right: 0,
                                top: 0,
                            }}
                        ></div>
                        <div
                            className="aurora__item absolute w-[60vw] h-[60vw]"
                            style={{
                                backgroundColor: "hsl(var(--color-3))",
                                filter: "blur(1rem)",
                                animation: "aurora-border 6s ease-in-out infinite, aurora-3 12s ease-in-out infinite alternate",
                                mixBlendMode: "overlay",
                                left: 0,
                                bottom: 0,
                            }}
                        ></div>
                        <div
                            className="aurora__item absolute w-[60vw] h-[60vw]"
                            style={{
                                backgroundColor: "hsl(var(--color-4))",
                                filter: "blur(1rem)",
                                animation: "aurora-border 6s ease-in-out infinite, aurora-4 12s ease-in-out infinite alternate",
                                mixBlendMode: "overlay",
                                right: 0,
                                bottom: "-50%",
                            }}
                        ></div>
                        <div
                            className="aurora__item absolute w-[60vw] h-[60vw]"
                            style={{
                                backgroundColor: "hsl(var(--color-5))",
                                filter: "blur(1rem)",
                                animation: "aurora-border 6s ease-in-out infinite, aurora-5 12s ease-in-out infinite alternate",
                                mixBlendMode: "overlay",
                            }}
                        ></div>
                    </div>
                </span>
            </h1>
            <p className="text-base lg:w-[750px] mx-auto sm:text-lg md:text-xl text-gray-600 font-medium text-center py-4">
                Varnan specializes in GTM strategies tailored for early-stage AI startups, ensuring your innovation reaches its full potential.
            </p>
        </section>
    )
}
