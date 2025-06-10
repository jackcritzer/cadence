import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import Mission from "@/components/sections/Mission";
import WaitlistForm from "../components/common/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-16">
      <Hero />
      <ValueProps />
      <Mission />
      <WaitlistForm />    
    </main>
  );
}