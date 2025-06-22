'use client'
import PrimaryButton from "../common/PrimaryButton"
import { useRouter, usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge';

export default function CTASection({ className = '' }) {
    const router = useRouter()
    const path = usePathname()

    /* const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }; */

    const handleClick = () => {
        if (path === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            router.push('/')
        }
    }

    return (
        <section className={twMerge(`
                twflex flex-col 
                items-center justify-center
                w-full h-auto
                bg-[linear-gradient(to_bottom,_#8AA260_80%,_#738B4A_100%)] 
                px-12 py-12
            `, className)}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-x-12 gap-y-9 max-w-[1200px] mx-auto">
                <div className="flex flex-col items-start justify-center gap-y-3">
                    <div className="text-white text-center font-dmsans font-bold tracking-[-0.03em] text-3xl">
                        Collaborate on Your Next Track
                    </div>
                    <div className="text-mustard font-dmsans font-medium tracking-[-0.03em] text-xl">
                        Be the first to try Cadence—join our early-access waitlist today.
                    </div>
                </div>
                <PrimaryButton text="Join the Producer Beta" onClick={handleClick} />
            </div>
        </section>
    )
}