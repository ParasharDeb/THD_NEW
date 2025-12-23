"use client";

import { FOOTER } from "../constants";


export default function FooterSection() {
  return (
    <section className="w-full bg-bgMain py-20 px-6" id="footer">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE — CONTACT INFO */}
        <div>
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
                {FOOTER.contact.social.platforms.map((s, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-textGreen text-textGreen hover:bg-bgCream transition cursor-pointer"
                  >
                    {s[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
          <form className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-textGreen mb-1">
                  {FOOTER.form.name.label}
                </label>
                <input
                  type="text"
                  placeholder={FOOTER.form.name.placeholder}
                  className="w-full rounded-xl px-4 py-3 text-sm border border-neutral-200 outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-textGreen mb-1">
                  {FOOTER.form.email.label}
                </label>
                <input
                  type="email"
                  placeholder={FOOTER.form.email.placeholder}
                  className="w-full rounded-xl px-4 py-3 text-sm border-neutral-200 border outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-textGreen mb-1">
                {FOOTER.form.message.label}
              </label>
              <textarea
                rows={5}
                placeholder={FOOTER.form.message.placeholder}
                className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm resize-none outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-black py-3 text-white text-sm font-medium hover:opacity-90 transition"
            >
              {FOOTER.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
