// app/blog/page.tsx
import Link from 'next/link'
//import CTASection from '@/components/sections/CTA'

export default function BlogPage() {
  return (
    <main className="min-h-[calc(100vh-var(--header-height))] min-w-full flex flex-col items-center justify-center px-6 py-12 bg-background_light text-text_primary">
      <h1 className="text-4xl font-bold mb-4">Blog Coming Soon</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        We’re working on some in-depth producer tips, tutorials, and stories. Check back soon, or jump back home to keep building with Cadence.
      </p>
      <div className="flex space-x-4">
        <Link href="/" passHref className="px-6 py-3 bg-sage text-white rounded-2xl shadow hover:opacity-90 transition">
            Return Home
        </Link>
        {/* <Link href="/" passHref className="px-6 py-3 border border-sage text-sage rounded-2xl hover:bg-sage hover:text-white transition">
            View Landing Page
        </Link> */}
      </div>
      {/* <CTASection className="justify-self-end"/> */}
    </main>
  )
}