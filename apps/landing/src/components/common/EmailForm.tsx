'use client';
import { useState } from "react";

//import FormCTAButton from "./FormCTAButton";
import SecondaryButton from "./SecondaryButton";

export default function EmailForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.sheetmonkey.io/form/7MNHJeXp2BRahRkE52hSfk", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => setShowSuccess(true), 100); // give it a frame for smooth mount
        form.reset(); // Optional: clears the input field
      } else {
        console.log(res.body)
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success" && showSuccess) {
    return (
      <div className="text-center text-deep_green text-xl font-semibold animate-fade-in transition-opacity duration-500 mt-8">
        🎉 You&apos;re on the waitlist! We&apos;ll keep you posted. 🥁
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-end justify-center gap-x-6 gap-y-4 mt-2">
      <div className="flex flex-col items-start justify-center gap-y-2">
        <label htmlFor="email" className="text-base text-white text-[14px] font-medium leading-[calc(120%)] tracking-[0.01em] ml-1 font-dmsans">
          Email
        </label>
        <input
          id="email"
          name="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          className="
              bg-white border border-divider_gray
              text-gray-900
              px-4 py-2 
              text-m text-rounded font-dmsans text-[16px] 
              tracking-[-0.03em] font-light
              rounded-[6px]
              placeholder-gray-400
              focus:outline-none
              w-[300px]"
        />
      </div>
      <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
      <SecondaryButton
        type="submit"
        disabled={status === 'loading'}
        className={`${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {status === 'loading' ? 'Submitting...' : 'Get Early Access'}
      </SecondaryButton>
      {status === "error" && (
        <p className="text-red-400 text-sm w-full">Something went wrong. Try again later.</p>
      )}
    </form>
  );
}
