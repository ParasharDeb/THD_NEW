'use client';

export default function FooterSection() {
  return (
    <section className="w-full bg-bgMain py-20 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE — CONTACT INFO */}
        <div>
          <h2 className="text-[2.75rem] font-serif text-textBrown mb-8">
            Get in touch
          </h2>

          <div className="space-y-6 text-textGreen">
            <div>
              <p className="text-sm uppercase tracking-wide mb-1">Email</p>
              <p className="text-base">hello@thehargiladesk.com</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide mb-1">Phone</p>
              <p className="text-base">+91 9XXXX XXXXX</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide mb-1">Address</p>
              <p className="text-base leading-relaxed">
                The Hargila Desk<br />
                Assam, India
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide mb-3">Follow us</p>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'LinkedIn', 'X'].map((s, i) => (
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
        <div className="bg-bgCream rounded-2xl p-8 shadow-sm">
          <form className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-textGreen mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl bg-bgMain px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm text-textGreen mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-xl bg-bgMain px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-textGreen mb-1">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write something..."
                className="w-full rounded-xl bg-bgMain px-4 py-3 text-sm resize-none outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-black py-3 text-white text-sm font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
