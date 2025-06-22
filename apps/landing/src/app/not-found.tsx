import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background_light text-text_primary">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Oops—this page doesn’t exist. Try heading back home or checking one of the links below.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-sage text-white rounded-2xl shadow hover:opacity-90 transition"
      >
        Return Home
      </Link>
    </main>
  )
}