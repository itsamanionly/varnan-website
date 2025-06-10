import { Logo } from "./logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="py-4 ">
      <nav className="flex justify-between px-3">
        <Logo />
        <div className="flex items-center gap-4 md:gap-8">
          {/* <Link
            className=" font-normal text-xl md:text-xl font-readex relative group/btn"
            type="submit"
            href={"/about-us"}
          >
            About Us
            <BottomGradient />
          </Link> */}
          <Link
            className=" font-normal text-md md:text-xl font-readex relative group/btn"
            type="submit"
            href={"/blog"}
          >
            Blogs
            <BottomGradient />
          </Link>
        </div>
      </nav>
    </header>
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
