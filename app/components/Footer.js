'use client'
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  // LESSON 1: useEffect runs when the component is mounted, also if it is empty array [] it will only run once when the component is mounted no matter
  // no matter the render, but if it has a value, it will run again when the value changes.
  // take not that it will run only ONCE however the functions inside stays active and still listen. 
  // It just won't run again. It won't restart.

  // So, it is running at the background after the component is mounted. And no matter how many times the component is re-rendered, it will not run again.
  // But it is still active and listening. Just won't restart. ONLY RUN ONCE, WON'T RESTART.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-700 font-inter">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {!isMobile && (
            //  we could just user hidden md: flex here but for the sake of studying and reviewing, we will use the long way
          <div className="flex flex-row justify-center items-start md:gap-16 lg:gap-64">
            <FooterSection title="About us" links={[
              { href: "/", text: "Company News" },
              { href: "/", text: "Gallery" },
              { href: "/", text: "Contact Information" },
            ]} />
            
            <FooterSection title="Order and Pick Up" links={[
              { href: "/", text: "Order on the App" },
              { href: "/", text: "Order on the Web" },
              { href: "/", text: "Delivery Options" },
            ]} />
            
            <FooterSection title="Social Impact" links={[
              { href: "/", text: "Workshop" },
              { href: "/", text: "People" },
            ]} />
          </div>
        )}
        
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-300 text-center text-sm">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Link href="https://www.facebook.com/block69coffee" target="_blank" className="transition-transform duration-300 hover:scale-110">
              <Image 
                src="/images/icons/facebook.png" 
                alt="Facebook" 
                width={30} 
                height={30} 
                className="filter brightness-0  invert-[50%] sepia-0 saturate-[1000%] hue-rotate-[180deg]"
              />
            </Link>

            <Link href="https://www.messenger.com/t/block69coffee" target="_blank" className="transition-transform duration-300 hover:scale-110">
              <Image 
                src="/images/icons/messenger.png" 
                alt="Messenger" 
                width={30} 
                height={30} 
                className="filter brightness-0  invert-[50%] sepia-0 saturate-[1000%] hue-rotate-[180deg]"
              />
            </Link>

            <Link href="https://www.tiktok.com/@block69coffee" target="_blank" className="transition-transform duration-300 hover:scale-110">
              <Image 
                src="/images/icons/tiktok.png" 
                alt="TikTok" 
                width={30} 
                height={30} 
                className="filter brightness-0  invert-[50%] sepia-0 saturate-[1000%] hue-rotate-[180deg]"
              />
            </Link>

            <Link href="https://www.instagram.com/block69coffee" className="transition-transform duration-300 hover:scale-110">
              <Image 
                src="/images/icons/instagram.png" 
                alt="Instagram" 
                width={30} 
                height={30} 
                className="filter brightness-0 invert-[50%] sepia-0 saturate-[1000%] hue-rotate-[180deg]"
              />
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Block 69 Coffee Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterSection({ title, links }) {
  return (
    <div className="text-center md:text-left mb-8 md:mb-0">
      <h3 className="font-bold mb-3 md:mb-4 text-lg md:text-xl">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="hover:text-gray-900 transition-colors duration-300">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
