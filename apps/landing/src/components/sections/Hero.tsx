import EmailForm from "../common/EmailForm";

export default function Hero() {
    return (
        <section className="flex items-center justify-center w-full min-h-[85vh] h-[_calc(100vh_-_var(--header-height)_-_2px)] bg-linear-to-b from-[#D4A95D] to-[#CCA148] px-8 py-4">
            <div className="flex flex-col flex-nowrap items-center justify-center content-center mx-auto text-center max-w-[1200px]">
                <h1 className="text-4xl md:text-5xl text-[#F5F0E1] font-bold tracking-[-0.01em] leading-normal">
                    <span className="block leading-normal mb-4">Never Lose Track of Your Latest Stems</span>
                    <span className="block text-2xl">Versioned file sharing + time-stamped comments for hip-hop producers</span>
                </h1>
                <p className="text-[#F5F0E1] font-semibold text-xl lg:text-2xl max-w-4/5 lg:max-w-3/5 mx-auto mt-12 mb-8 tracking-[-0.03em]">
                    Drop any stem or mix (kick.wav, beat.wav, etc.)—Cadence auto-tags v1, v2, v3 so you always know which to send out.
                </p>
                <EmailForm />
            </div>
        </section>
    )
}