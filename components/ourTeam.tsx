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
                    fill="currentColor"
                    className="text-gray-800"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
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
                Paras is a builder at heart, not just of products, but of
                momentum. With a strong technical background and deep experience
                launching AI products, he&apos;s seen the same story play out
                too often: great tech, lost in translation. Having built and
                scaled products to over a million users and worked with
                YC-backed AI first companies like Athina and Unify AI, Paras
                knows both the depth of AI Tech and the nuance of GTM. He also
                runs an AI community of 200K+ people, where he creates content
                that simplifies complex ideas and drives real traction. He
                speaks both code and customer and that&apos;s what sets him
                apart.
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
                {/* <Link href={"https://www.linkedin.com/in/sam-josh-5b64521a2/"}>
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
                </Link> */}
                <Link href={"https://www.reddit.com/user/Sam_Tech1/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-800 "
                  >
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                  </svg>
                </Link>
              </div>

              <p className="text-sm md:text-base lg:text-lg text-justify md:text-justify">
                Sam is the kind of person who just gets what a product needs not
                just in theory, but in the wild. A Stanford grad in science and
                tech, he&apos;s been working alongside Paras for over four
                years, from their first startup Cruxe to now building GTM
                engines that actually move the needle. Sam brings a rare mix of
                deep product sense, social media instinct, and sharp analytical
                thinking. He understands how people think, what they click on,
                and why they care. Whether it&apos;s picking the right channel or
                shaping the perfect message, Sam has a psychological eye for
                detail and always finds the missing piece.
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
