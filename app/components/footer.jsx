"use client";

import { useState } from "react";
import { FOOTER } from "../constants";
import { Instagram, Linkedin } from "lucide-react";

export default function FooterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return setStatus("error");
    setStatus("loading");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-bgMain py-20 px-6" id="footer">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE — CONTACT INFO */}
        <div className="order-2 md:order-1">
          <h2 className="text-[2.75rem] font-serif text-textBrown mb-8">
            {FOOTER.title}
          </h2>

          <div className="space-y-6 text-textGreen">
            <div>
              <p className="text-sm uppercase tracking-wide mb-1">
                {FOOTER.contact.email.label}
              </p>
              <p className="text-base">{FOOTER.contact.email.value}</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide mb-1">
                {FOOTER.contact.phone.label}
              </p>
              <p className="text-base">{FOOTER.contact.phone.value}</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide mb-1">
                {FOOTER.contact.address.label}
              </p>
              <p className="text-base leading-relaxed">
                {FOOTER.contact.address.value}
                <br />
                {FOOTER.contact.address.location}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide mb-3">
                {FOOTER.contact.social.label}
              </p>
              <div className="flex gap-4">
                {FOOTER.contact.social.platforms.map((s, i) => {
                  const url =
                    s === "Instagram"
                      ? "https://www.instagram.com/the_hargila_desk/"
                      : s === "LinkedIn"
                      ? "https://www.linkedin.com/company/the-hargila-desk/"
                      : null;

                  const Icon = s === "Instagram" ? Instagram : Linkedin;

                  return url ? (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s}
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-textGreen text-textGreen hover:bg-bgCream transition"
                    >
                      <Icon size={18} />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="order-1 md:order-2 bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-textGreen mb-1">
                  {FOOTER.form.name.label}
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder={FOOTER.form.name.placeholder}
                  className="w-full rounded-xl px-4 py-3 text-sm border border-neutral-200 outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-textGreen mb-1">
                  {FOOTER.form.email.label}
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder={FOOTER.form.email.placeholder}
                  className="w-full rounded-xl px-4 py-3 text-sm border-neutral-200 border outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-textGreen mb-1">
                {FOOTER.form.message.label}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder={FOOTER.form.message.placeholder}
                className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm resize-none outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-bgcream py-3 text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : FOOTER.form.submitButton}
            </button>

            {/* status messages */}
            {status === "success" && <p className="text-green-600">Thanks — your message and signup were saved.</p>}
            {status === "error" && <p className="text-red-600">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
