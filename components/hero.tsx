import React from "react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="pt-[4rem] lg:pt-24">
      <h1 className="text-balance z-50 text-center text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl ">
        You Build the AI
        <br className="block " />
        We Turn it into {" "}
        <span className="inline-flex overflow-hidden relative bg-white mt-1.5 px-1">
          <span className="gradient-text">Revenue.</span>
          <div className="aurora absolute inset-0 pointer-events-none mix-blend-lighten opacity-50">
            <div
              className="aurora__item absolute w-[60vw] h-[60vw]"
              style={{
                backgroundColor: "hsl(var(--color-1))",
                filter: "blur(1rem)",
                animation:
                  "aurora-border 6s ease-in-out infinite, aurora-1 12s ease-in-out infinite alternate",
                mixBlendMode: "overlay",
                top: "-50%",
              }}
            ></div>
            <div
              className="aurora__item absolute w-[60vw] h-[60vw]"
              style={{
                backgroundColor: "hsl(var(--color-2))",
                filter: "blur(1rem)",
                animation:
                  "aurora-border 6s ease-in-out infinite, aurora-2 12s ease-in-out infinite alternate",
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
                animation:
                  "aurora-border 6s ease-in-out infinite, aurora-3 12s ease-in-out infinite alternate",
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
                animation:
                  "aurora-border 6s ease-in-out infinite, aurora-4 12s ease-in-out infinite alternate",
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
                animation:
                  "aurora-border 6s ease-in-out infinite, aurora-5 12s ease-in-out infinite alternate",
                mixBlendMode: "overlay",
              }}
            ></div>
          </div>
        </span>
      </h1>
      <p className="text-base lg:w-[750px] mx-auto sm:text-lg md:text-xl text-gray-600 font-medium text-center py-4">
        Get qualified leads consistently with proven content, positioning, and outbound strategies without guessing or hiring a full marketing team.
      </p>

      <div className=" flex flex-col items-center justify-center my-5">
        <Link href="https://calendly.com/varnan-discovery-call/30min">
          <button
            className="bg-gradient-to-br w-fit px-9 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800  text-white rounded-md h-11 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Book a Free Discovery Call
            <BottomGradient />
          </button>
        </Link>
        {/* <div className="mt-2 flex items-center justify-center">
          <span className="bg-green-50 text-green-700 px-2 py-[3px] rounded text-[14px] font-medium border border-green-200 shadow">
            Results in 90 days or We Refund Everything
          </span>
        </div> */}
        <span className=" px-2 py-3  text-gray-400   text-[14px] font-medium ">
          Results in 90 days or We Refund Everything
        </span>
      </div>

    </section>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
