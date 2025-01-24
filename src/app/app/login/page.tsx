// app/login/page.tsx
"use client";

import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error signing in with Google:", error.message);
    } else {
      router.push("/"); // Redirect to homepage or desired page after login
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="font-semibold text-3xl mb-2">Customer Sign in</h2>
      <p className="mb-4 text-sm text-red-500">
        You need to sign in before you can make a purchase
      </p>
      <button
        className="p-4 border-[2px] border-gray-500 rounded-md hover:bg-black hover:text-white w-2/3"
        onClick={handleGoogleSignIn}
      >
        Sign in with Google
      </button>
    </main>
  );
}
