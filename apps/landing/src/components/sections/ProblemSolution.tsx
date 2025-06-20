'use client'
//import Link from "next/link"
//import Image from "next/image"
//import HorizontalFlowChart from '@/../public/Horizontal_Flow_Chart.svg'

export default function ProblemSolution() {
    return (
        <section className="flex items-center justify-center w-full bg-[linear-gradient(to_bottom,_#F5F0E8_80%,_#E9E5DD_100%)] px-12 py-16 bg-ba">
            <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto">
                <h2 className="text-h2-size text-center font-dmsans font-bold tracking-[-0.03em] text-text_primary mb-4 px-2">
                    Too Many Tools, Not Enough Flow
                </h2>
                <p className="text-xl text-left font-regular font-dmsans tracking-[-0.03em] text-text_primary">
                    Juggling multiple apps, folders, and chat threads slows your creative flow.
                </p>
                <picture>
                    <source 
                        media="(min-width: 1024px)"
                        srcSet="/Horizontal_Flow_Chart.svg"
                    />
                    <img 
                        src="/Vertical_Flow_Chart.svg" 
                        alt="Cadence Flow Chart"
                        className="w-full h-auto my-10"
                    />
                </picture>
                <div className="text-xl text-center font-medium tracking-[-0.03em] text-mustard">
                    Cadence brings every tool into one secure, versioned workspace.
                </div>
                {/* <Link href="#how-it-works" className="text-[18px] font-dmsans font-regular text-sage tracking-[-0.03em] mt-10">
                    See how it works →
                </Link> */}
            </div>
        </section>
    )
}