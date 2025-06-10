'use client'
import Link from "next/link"
import Image from "next/image"
import HorizontalLogo from '../../../public/Logo/Horizontal_Logo.svg'
import GhostButton from "../common/GhostButton"

export default function Header() {
    

    return (
        <header className="sticky top-0 z-50 bg-background_light bg-opacity-80 backdrop-blur-md shadow-sm">
            <div className="mx-auto max-w-7xl px-4 py-3 flex justify-between tracking-[-0.03em]">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Image src={HorizontalLogo} alt="Cadence Logo" width={120} height={40} priority/>
                    </Link>
                </div>
                <nav className="flex items-center gap-6">
                    <a href="#problem-solution" className="text-black hover:underline font-dmsans">
                        How it works
                    </a>
                    <a href="#features" className="text-black hover:underline font-dmsans">
                        Features
                    </a>
                    <GhostButton text="Get Early Access"/>
                </nav>
            </div>
        </header>
    )
}