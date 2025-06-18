'use client'
import PrimaryButton from "../common/PrimaryButton"

export default function CTASection() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="flex flex-col items-center justify-center w-full h-auto bg-sage px-16 py-16">
            <div className="flex items-center justify-between min-w-fit wrap-normal gap-x-20">
                <div className="flex flex-col items-start justify-center">
                    <div className="text-white font-dmsans font-bold tracking-[-0.03em] text-3xl">
                        Collaborate on Your Next Track
                    </div>
                    <div className="text-mustard font-dmsans font-medium tracking-[-0.03em] text-[18px]">
                        Be the first to try Cadence—join our early-access waitlist today.
                    </div>
                </div>
                <PrimaryButton text="Get Early Access" onClick={scrollToTop} />
            </div>
        </section>
    )
}