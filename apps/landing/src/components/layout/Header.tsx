'use client'
import Link from "next/link"
import Image from "next/image"
import HorizontalLogo from '@/../public/Logo/Horizontal_Logo.svg'
import GhostButton from "@/components/common/GhostButton"
import { useState, useEffect } from "react"

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    // Optional: close menu when screen size becomes >= lg
    useEffect(() => {
        if (typeof window === 'undefined') return;
        setMenuOpen(window.innerWidth >= 1024 ? false : menuOpen);
    }, [menuOpen]);

    const toggleMenuOpen = () => {
        setMenuOpen(menuOpen =>!menuOpen)
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="
                w-full 
                sticky top-0 z-50 
                bg-background_light bg-opacity-80 backdrop-blur-md shadow-sm  
                flex flex-col flex-wrap justify-around 
                lg:flex-row tracking-[-0.03em]
            ">
            <div id="site-header" className="flex items-center justify-between gap-2 px-4 py-4 max-w-[1200px] mx-auto w-full">
                <Link href="/">
                    <Image src={HorizontalLogo} alt="Cadence Logo" sizes="{max-width: 768px} 80px, {max-width: 1200px} 120px, 30px" priority/>
                </Link>
                <nav 
                    className={`
                        ${menuOpen ? 'flex': 'hidden'}
                        absolute top-full left-0
                        lg:static lg:left-auto lg:top-auto lg:w-auto
                        flex-col justify-start items-start gap-3 divide-y-[1px] divide-gray-300 
                        lg:divide-y-0
                        lg:flex-row lg:items-center
                        w-full
                        z-50
                        bg-white/90 bg-blend-overlay
                        lg:bg-transparent
                        transition-all duration-300 ease-in-out
                        ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}

                        lg:flex lg:opacity-100 lg:max-h-none
                        `
                    }>
                    <Link href="#problem-solution" className="w-full lg:w-auto whitespace-nowrap text-base text-black hover:underline font-dmsans py-2 px-4">
                        How it works
                    </Link>
                    <Link href="#features" className="w-full lg:w-auto whitespace-nowrap text-base text-black hover:underline font-dmsans py-2 px-4">
                        Features
                    </Link>
                    <Link href="/blog" className="w-full lg:w-auto whitespace-nowrap text-base text-black hover:underline font-dmsans py-2 px-4">
                        Blog
                    </Link>
                    <GhostButton className={"my-2 self-center"} text="Get Early Access" onClick={scrollToTop}/>
                </nav>
                <button className={"justify-self-end lg:hidden"} onClick={toggleMenuOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    )
}