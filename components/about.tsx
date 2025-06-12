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
              At Varnan, we exist to make innovative and most impactful AI SaaS visible to the world. We partner with late early-stage AI startups and turn their raw technical genius into market-ready super products. From crafting the right positioning to unlocking precise user acquisition, we don’t follow any kind of available GTM templates, instead we make tailored growth engines for every startup we work with. 
              <br /><br />
              In a world where attention is scarce and AI is booming, we make sure your innovation is not just another AI Product Hunt launch instead its a product that’s seen, heard, adopted, and scaled. We stand by one belief: Great products deserve great discovery. Let’s launch yours into the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};