import EmailForm from "../common/EmailForm";

export default function Hero() {
    return (
        <section className="flex items-center justify-center w-full min-h-[85vh] h-[_calc(100vh_-_var(--header-height)_-_5px)] bg-linear-to-b from-[#D4A95D] to-[#CCA148] px-8 py-4">
            <div className="flex flex-col flex-nowrap items-center justify-center content-center mx-auto text-center max-w-[1200px]">
                <h1 className="text-4xl md:text-5xl text-[#F5F0E1] font-bold tracking-[-0.01em] leading-normal">
                    <span className="block">Bring Your Tracks</span>
                    <span className="block">Into Perfect Sync</span>
                </h1>
                <p className="text-[#F5F0E1] font-semibold text-xl lg:text-2xl max-w-4/5 lg:max-w-3/5 mx-auto mt-8 mb-6 tracking-[-0.03em]">
                    Cadence is your shared space for beats, stems, feedback, and credits—from first take to final mix.
                </p>
                <EmailForm />
            </div>
        </section>
    )
}