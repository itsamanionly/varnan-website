import Image from "next/image";

export const About = () => {
  return (
    <section className="h-fit w-full  bg-white relative flex items-center justify-center lg:py-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        <div className="bg-white w-[80%] mx-auto p-10 border rounded-lg drop-shadow-sm flex flex-row justify-between items-center">
          <div className="hidden lg:flex items-center justify-center p-5 w-[35%]">
            <Image
              src="/table-meet.png"
              alt="logo"
              width={0}
              height={0}
              quality={100}
              sizes="100vw"
              className="w-full h-full object-scale-down rounded-lg"
            />
          </div>
          <div className="flex lg:items-start justify-between flex-col w-full lg:w-[65%] lg:pl-8">
            <h2 className="text-6xl text-center lg:text-left font-bold tracking-tighter md:text-6xl lg:text-[5.5rem] sm:text-md">
              What We Do
            </h2>
            <p className="text-lg text-justify lg:text-left py-[2rem] md:text-lg lg:text-lg">
              At Varnan, we exist to help AI startups launch and grow. We partner with seed stage to Series A startup teams and turn raw technical brilliance into products people actually discover and adopt. From defining sharp positioning to building distribution across Reddit, Hacker News, LinkedIn and launching on Product Hunt, we don’t follow templates we design custom growth loops for every startup we work with.
              <br /><br />
              We’re AI engineers first, marketers second. Every part of our process runs on our own AI agents, letting us test faster, publish quicker, and scale without extra layers of people or delay. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
