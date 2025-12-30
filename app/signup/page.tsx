"use client";

import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="max-w-lg mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif mb-4">Sign up</h2>
      <p className="mb-6">Enter your name and email to join our mailing list.</p>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-700 text-white rounded-md"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Saving..." : "Sign up"}
          </button>
        </div>

        {status === "success" && (
          <p className="text-green-600">Thanks! We saved your signup.</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Something went wrong. Try again later.</p>
        )}
      </form>
    </main>
  );
}
