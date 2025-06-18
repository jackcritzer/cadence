export default function Footer() {
    return (
        <footer className="bg-[#F8F8F8] text-sm text-gray-500 px-6 py-12 font-dmsans tracking-[-0.03em]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Left Section */}
                <div className="space-y-2">
                    <div className="text-lg font-semibold text-black">Cadence Studio</div>
                    <p>© {new Date().getFullYear()} Cadence Studio. All rights reserved.</p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <a href="#how-it-works" className="hover:text-black transition">How it works</a>
                    <a href="#features" className="hover:text-black transition">Features</a>
                    <a href="mailto:hello@cadencestudio.io" className="hover:text-black transition">Contact</a>
                    <a href="/privacy" className="hover:text-black transition">Privacy</a>
                </div>
            </div>
        </footer>

    )
}