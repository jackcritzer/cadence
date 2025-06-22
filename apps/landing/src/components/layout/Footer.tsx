import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#F8F8F8] text-sm text-gray-500 px-6 py-12 font-dmsans tracking-[-0.03em]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Left Section */}
                <div className="space-y-2">
                    <div className="text-lg font-semibold text-black">Cadence</div>
                    <p>© {new Date().getFullYear()} Cadence. All rights reserved.</p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <Link href="/#features" className="hover:text-black transition">Features</Link>
                    <Link href="/blog" className="hover:text-black transition">Blog</Link>
                    <Link href="mailto:hello@cadencestudio.io" className="hover:text-black transition">Contact</Link>
                    <Link href="/privacy" className="hover:text-black transition">Privacy</Link>
                </div>
            </div>
        </footer>

    )
}