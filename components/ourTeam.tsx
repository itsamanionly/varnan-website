import Image from "next/image";
import Link from "next/link";

export const OurTeam = () => {
  return (
    <div className="h-fit relative p-10 lg:pt-20 lg:pb-20 mb-20">
      <div className="relative z-1 flex flex-col lg:flex-row items-center justify-between gap-10  lg:gap-20">
        <div className="w-full space-y-6">
          <div className="text-6xl text-center font-bold md:text-5xl pb-[1rem] lg:text-9xl md:text-7xl">
            Our Visionaries
          </div>
          <p className="font-normal text-center text-xl pb-[2rem] text-gray-500 lg:text-2xl">
            Driving innovation and excellence — our diverse team is dedicated to
            your success.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-around pb-[1.5rem] gap-6 lg:gap-5 mt-10 max-w-6xl mx-auto">
            <div className="w-full md:w-[30%] group hover:scale-[1.02] transition duration-300 ease-in-out flex flex-col items-center justify-center gap-2 rounded-lg shadow-lg border border-gray-300 h-auto">
              <Image
                src="/paras.png"
                alt="paras"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-[70%] group h-auto min-h-60 flex flex-col justify-center px-6 md:px-8 py-6 gap-3 rounded-lg border border-gray-300 shadow-sm">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-right">
                Paras Madan
              </h3>
              <h5 className="text-base md:text-lg font-semibold text-center md:text-right italic text-gray-500">
                Chief Executing Officer
              </h5>
              <div className="flex gap-4 items-end align-right justify-end">
                <Link
                  href={"https://www.linkedin.com/in/paras-madan-a9863716b"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin-icon lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link
                  href={"https://www.instagram.com/parasmadan.in"}
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href={"https://medium.com/@parasmadan.in"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-medium-icon lucide-medium"
                  >
                    <path d="M4 4l5 8 5-8" />
                    <path d="M19 4h1v16h-1z" />
                    <path d="M14 4h1v16h-1z" />
                    <path d="M9 12l5 8" />
                    <path d="M4 20l5-8" />
                  </svg>
                </Link>

                <Link href={"https://parasmadan.in"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-briefcase-business-icon lucide-briefcase-business"
                  >
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                </Link>
              </div>
              
              <p className="text-sm md:text-base lg:text-lg text-justify md:text-justify">
                Paras is a builder at heart — not just of products, but of
                momentum. With a strong technical background and deep experience
                launching AI products, he’s seen the same story play out too
                often: great tech, lost in translation. Having built and scaled
                products to over a million users and worked with YC-backed
                companies like Athena and Unify AI, Paras knows both the depth
                of AI and the nuance of GTM. He also runs a thriving AI
                community of 200K+ people, where he creates content that
                simplifies complex ideas and drives real traction. He speaks
                both code and customer — and that’s what sets him apart.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 lg:gap-5 mt-10 max-w-6xl mx-auto">
            <div className="w-full md:w-[70%] group h-auto min-h-60 flex flex-col justify-center px-6 md:px-8 py-6 gap-3 rounded-lg border border-gray-300 shadow-sm">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
                Sam Josh
              </h3>
              <h5 className="text-base md:text-lg font-semibold text-center md:text-left italic text-gray-500">
                GTM Head
              </h5>
              <div className="flex gap-4 items-center">
                <Link href={"https://www.linkedin.com/in/sam-josh-5b64521a2/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin-icon lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href={"https://www.reddit.com/user/Sam_Tech1/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-reddit-icon lucide-reddit"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="9" cy="13" r="1" />
                    <circle cx="15" cy="13" r="1" />
                    <path d="M9 16c1.5 1 4.5 1 6 0" />
                    <path d="m16.5 7.5 1.5-4 3 1" />
                    <path d="M18.5 6.5c-.5-.5-1.5-.5-2.5 0" />
                  </svg>
                </Link>
              </div>
              
              <p className="text-sm md:text-base lg:text-lg text-justify md:text-justify">
                Sam is the kind of person who just gets what a product needs —
                not just in theory, but in the wild. A Stanford grad in science
                and tech, he’s been working alongside Paras for over four years,
                from their first startup Crux to now building GTM engines that
                actually move the needle. Sam brings a rare mix of deep product
                sense, social media instinct, and sharp analytical thinking. He
                understands how people think, what they click on, and why they
                care. Whether it's picking the right channel or shaping the
                perfect message, Sam has a psychological eye for detail — and
                always finds the missing piece.
              </p>
            </div>
            <div className="w-full md:w-[30%] group hover:scale-[1.02] hover:drop-shadow transition duration-300 ease-in-out text-center flex flex-col items-center justify-center gap-2 rounded-lg shadow-lg">
              {/* <div className="w-48 h-48 relative">
                <Image
                  src="/man.jpg"
                  alt="paras"
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </div> */}
              <Image
                src="/sam.jpg"
                alt="sam"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};