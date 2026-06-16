function FooterLogo() {
  return (
    <div className="flex min-h-[105px] items-center justify-center bg-[#dff1f8] px-8">
      <div>
        <p className="font-serif text-xl font-bold text-[#bd2f89]">
          SIGMA PUBLISHER
        </p>
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d79a27]">
          Research meets publish
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-8 bg-black text-white">
      <div className="bg-[#126da2]">
        <div className="mx-auto grid max-w-[1670px] items-center gap-5 px-4 md:grid-cols-[250px_1fr] md:px-8 xl:px-[125px]">
          <FooterLogo />

          <div className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <p className="text-sm text-white/80">
                Subscribe for more Update
              </p>
            </div>

            <div className="flex w-full max-w-[575px] flex-col gap-2 rounded-2xl bg-white p-2 sm:h-14 sm:flex-row sm:overflow-hidden sm:rounded-full sm:p-1.5">
              <input
                className="min-w-0 flex-1 px-6 py-3 text-sm text-[#111827] outline-none"
                placeholder="Your Email Address"
              />
              <button className="rounded-full bg-[#bd2f89] px-7 py-3 text-sm font-bold text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1670px] gap-10 px-4 py-12 md:grid-cols-2 md:px-8 xl:px-[125px]">
        <div>
          <h3 className="mb-6 border-l-4 border-white pl-4 text-2xl font-bold text-[#bd2f89]">
            About Us
          </h3>
          <p className="max-w-xl text-base leading-8 text-white/85">
            At Sigma Publisher, every idea deserves to be heard. We help authors
            and researchers bring their work to life with simple publishing
            support, quality design, and worldwide distribution.
          </p>
        </div>

        <div>
          <h3 className="mb-6 border-l-4 border-white pl-4 text-2xl font-bold text-[#bd2f89]">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-white/85">
            <li>+1 224 521 8945</li>
            <li>fortresspublishingusa.com</li>
            <li>info@fortresspublishingusa.com</li>
            <li>10 Sterling Blvd, Englewood, NJ 07631, USA</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#202020]">
        <div className="mx-auto flex max-w-[1670px] flex-col items-center justify-between gap-5 px-4 py-6 text-center text-sm text-white/75 md:flex-row md:px-8 xl:px-[125px]">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#bd2f89]">
              f
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#bd2f89]">
              x
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#bd2f89]">
              in
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <span>Privacy</span>
            <span>Policy</span>
            <span>Terms & Conditions</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="rounded bg-white px-3 py-1 text-[#1d2635]">
              MC
            </span>
            <span className="rounded bg-white px-3 py-1 text-[#1d2635]">
              PayPal
            </span>
            <span className="rounded bg-white px-3 py-1 text-[#1d2635]">
              Visa
            </span>
          </div>
        </div>
      </div>

      <p className="px-4 py-6 text-center text-sm text-white/80">
        Copyright © 2026{" "}
        <span className="text-[#bd2f89]">Sigma Publisher</span>. All Rights
        Reserved
      </p>
    </footer>
  );
}