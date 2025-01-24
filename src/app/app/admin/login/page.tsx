// app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Error signing in:", error.message);
    } else {
      router.push("/admin/dashboard"); // Redirect to admin dashboard after login
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="font-semibold text-3xl mb-4">Admin Sign in</h2>
      <form className="w-2/3" onSubmit={handleLogin}>
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-gray-400 rounded-sm mb-4"
          required
          value={email}
          placeholder="admin@admin.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-3 border border-gray-400 rounded-sm mb-4"
          required
          value={password}
          placeholder="admin123"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="p-4 text-lg mb-3 bg-blue-600 text-white w-full rounded-md">
          Sign in
        </button>
      </form>
    </main>
  );
}
