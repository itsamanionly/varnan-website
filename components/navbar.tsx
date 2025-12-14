// components/navbar.tsx
import { Logo } from "./logo";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header className="py-4">
      <nav className="flex justify-between px-3">
        <Logo />
        <div className="flex items-center gap-4 md:gap-8">
          {/* <Link
            className="font-normal text-md md:text-xl font-readex relative group/btn"
            href={"/about-us"}
          >
            About Us
            <BottomGradient />
          </Link> */}
          <ResourcesDropdown />
        </div>
      </nav>
    </header>
  );
};

const ResourcesDropdown = () => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-2 font-normal text-md md:text-xl font-readex relative group/btn p-2">
        Resources
        <FaChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        <BottomGradient />
      </button>
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
        <div className="py-1">
          <Link
            href="/blog"
            className="block font-semibold text-black px-4 py-2 text-md text-gray-700"
          >
            Blogs
          </Link>
          <Link
            href="/growth-strategies"
            className="block font-semibold text-black px-4 py-2 text-md text-gray-700"
          >
            Growth Strategies
          </Link>
        </div>
      </div>
    </div>
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