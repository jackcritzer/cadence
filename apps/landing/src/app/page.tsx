import Hero from "@/components/sections/Hero";
//import ValueProps from "@/components/sections/ValueProps";
//import Mission from "@/components/sections/Mission";
//import WaitlistForm from "../components/common/WaitlistForm";
import ProblemSolution from "@/components/sections/ProblemSolution";
import PlatformComparison from "@/components/sections/Comparison";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import CTASection from "@/components/sections/CTA";

export const metadata = {
  title: 'Cadence Studio',
  description: 'Join the waitlist to collaborate on music projects.',
};

export default function Home() {
  return (
    <main className="min-h-screen min-w-full bg-background_light text-white flex flex-col items-center justify-center">
      <Hero />
      <ProblemSolution />
      <PlatformComparison />
      <FeatureHighlights />
      <CTASection />
    </main>
  );
}