'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`hover:border-b hover:border-black transition-colors  ${
          isActive ? 'border-b-2 border-black' : ''
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="w-full h-auto md:h-[7rem] flex flex-col md:flex-row items-center mb-8" style={{boxShadow: "0em 1px 10px rgb(0, 0, 0, .2)"}}>
      <nav className="container mx-auto text-[1.10rem] font-semibold flex flex-col md:flex-row justify-between items-center">  
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <Image src="/images/icons/newlogo.png" alt="Block 69" width={88} height={45} className="m-[1.3rem] mx-[3rem] mb-[0.8em]"/>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto text-sm`}>
          <li className="my-2 md:my-0 md:mx-7"><NavLink href="/menu">MENU</NavLink></li>
          <li className="my-2 md:my-0 md:mx-7"><NavLink href="/blog">BLOG</NavLink></li>
          <li className="my-2 md:my-0 md:mx-7"><NavLink href="/services">SERVICES</NavLink></li>
          <li className="my-2 md:my-0 md:mx-7"><NavLink href="/about">ABOUT US</NavLink></li>
        </ul>

        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row  items-center mt-4 md:mt-0 mr-4 text-sm space-y-4 md:space-y-0 md:space-x-4`}>
          <li>
            <Link href="/" className="block w-full md:w-auto bg-white border hover:bg-black hover:text-white transition-colors duration-300 ease-in-out border-black rounded-[3em] px-4 py-2 text-center">
              Login
            </Link>
          </li>
          <li>
            <Link href="/" className="block w-full md:w-auto bg-black hover:bg-white hover:text-black border border-black transition-colors duration-300 ease-in-out text-white px-4 py-2  rounded-[3em] text-center">
              Join Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
