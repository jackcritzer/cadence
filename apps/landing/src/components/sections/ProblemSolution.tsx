'use client'
//import Link from "next/link"
import Image from "next/image"
import HorizontalFlowChart from '@/../public/Horizontal_Flow_Chart.svg'

export default function ProblemSolution() {
    return (
        <section className="flex flex-col items-center justify-center w-full h-auto bg-background_light px-16 py-16">
            <h2 className="text-h2-size font-dmsans font-bold tracking-[-0.03em] text-text_primary mb-2">
                Too Many Tools, Not Enough Flow
            </h2>
            <p className="text-[18px] font-regular font-dmsans tracking-[-0.03em] text-text_primary">
                Juggling multiple apps, folders, and chat threads slows your creative flow.
            </p>
            <Image src={HorizontalFlowChart} alt="Cadence Flow Chart" style={{ width: '70vw', objectFit: 'cover', margin: '70px 0'}}/>
            <div className="text-h3-size font-medium tracking-[-0.03em] text-mustard">
                Cadence brings every tool into one secure, versioned workspace.
            </div>
            {/* <Link href="#how-it-works" className="text-[18px] font-dmsans font-regular text-sage tracking-[-0.03em] mt-10">
                See how it works →
            </Link> */}
        </section>
    )
}