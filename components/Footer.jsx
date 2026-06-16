function BirdLogoSmall() {
  return (
    <svg viewBox="0 0 80 72" className="h-12 w-12 shrink-0" aria-hidden="true">
      <path d="M34 34 C20 20 12 16 3 18 C13 28 19 36 29 45 Z" fill="#126da2" />
      <path d="M37 29 C23 8 13 3 6 6 C17 16 24 27 32 42 Z" fill="#bd2f89" />
      <path d="M41 31 C39 12 43 4 51 1 C51 15 48 27 43 41 Z" fill="#f04f2f" />
      <path d="M43 36 C55 18 65 14 75 17 C62 25 54 35 46 48 Z" fill="#22a86b" />
      <path d="M36 42 C27 54 22 64 23 71 C34 62 39 54 43 45 Z" fill="#f1a525" />
      <path d="M36 34 C41 29 48 31 51 37 C45 37 40 39 36 44 C31 41 31 37 36 34 Z" fill="#111827" />
      <circle cx="45" cy="34" r="1.8" fill="white" />
      <path d="M50 35 L72 31" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function FooterLogo() {
  return (
    <div className="flex h-[93px] items-center justify-center gap-2 bg-[#dff1f8] px-8">
      <BirdLogoSmall />
      <div className="leading-none">
        <p className="font-serif text-lg font-bold tracking-wide text-[#bd2f89]">
          SIGMA PUBLISHER
        </p>
        <p className="mt-2 text-[7px] font-bold uppercase tracking-[0.36em] text-[#d99000]">
          Research Meets Readers
        </p>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 42 42" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M7 13h28v19H7z" stroke="white" strokeWidth="4" />
      <path d="M7 14l14 11 14-11" stroke="white" strokeWidth="4" />
      <path d="M20 7h13v13" stroke="white" strokeWidth="4" />
    </svg>
  );
}

function ContactIcon({ children }) {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#74d3d7] text-black">
      {children}
    </span>
  );
}

function PaymentBadge({ type }) {
  const labels = {
    master: "MasterCard",
    paypal: "PayPal",
    amex: "AMERICAN\nEXPRESS",
    visa: "VISA",
  };

  const colors = {
    master: "bg-[#1b4f9c] text-[#ffcc33]",
    paypal: "bg-white text-[#164f9f]",
    amex: "bg-[#2b78c2] text-white",
    visa: "bg-white text-[#1b4f9c]",
  };

  return (
    <span className={`grid h-7 w-[58px] place-items-center rounded-sm text-[9px] font-black leading-none ${colors[type]}`}>
      {labels[type]}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="mt-8 bg-black text-white">
      <div className="bg-[#126da2]">
        <div className="mx-auto grid max-w-[1670px] items-center px-4 md:grid-cols-[250px_1fr] md:px-8 xl:px-[125px]">
          <FooterLogo />

          <div className="flex h-[93px] items-center justify-between gap-8 pl-12">
            <div className="flex items-center gap-4">
              <MailIcon />
              <div>
                <h3 className="text-[24px] font-bold leading-none">Get In Touch</h3>
                <p className="mt-2 text-[14px] text-white/85">Subscribe for more Update</p>
              </div>
            </div>

            <div className="flex h-11 w-full max-w-[575px] overflow-hidden rounded-full bg-white">
              <input
                className="min-w-0 flex-1 px-8 text-[13px] text-[#111827] outline-none"
                placeholder="Your Email Address"
              />
              <button className="rounded-full bg-[#bd2f89] px-8 text-[13px] font-bold tracking-widest">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1670px] gap-20 px-4 py-10 md:grid-cols-2 md:px-8 xl:px-[125px]">
        <div>
          <h3 className="mb-6 border-l-4 border-white pl-5 text-[24px] font-bold text-[#bd2f89]">
            About Us
          </h3>
          <p className="max-w-[500px] text-[15px] leading-7 text-white/90">
            At Sigma Publisher, we believe every idea deserves to be heard. We help authors and researchers bring their
            work to life with seamless publishing solutions from manuscript development to worldwide distribution. With
            a focus on quality, speed, and innovation, we turn your vision into a powerful published reality.
          </p>
        </div>

        <div>
          <h3 className="mb-6 border-l-4 border-white pl-5 text-[24px] font-bold text-[#bd2f89]">
            Contact
          </h3>
          <ul className="space-y-4 text-[13px] text-white/90">
            <li className="flex items-center gap-4">
              <ContactIcon>☎</ContactIcon>
              +1 224 521 8945
            </li>
            <li className="flex items-center gap-4">
              <ContactIcon>◎</ContactIcon>
              fortresspublishingusa.com
            </li>
            <li className="flex items-center gap-4">
              <ContactIcon>✉</ContactIcon>
              info@fortresspublishingusa.com
            </li>
            <li className="flex items-center gap-4">
              <ContactIcon>●</ContactIcon>
              10 Sterling Blvd, Englewood, NJ 07631, USA
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#202020]">
        <div className="mx-auto flex max-w-[1670px] items-center justify-between px-4 py-5 text-[13px] text-white/85 md:px-8 xl:px-[125px]">
          <div className="flex gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#bd2f89]">f</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#bd2f89]">x</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#bd2f89]">◎</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#bd2f89]">◌</span>
          </div>

          <div className="flex gap-7">
            <span>Privacy</span>
            <span>Policy</span>
            <span>Terms & Conditions</span>
          </div>

          <div className="flex gap-4">
            <PaymentBadge type="master" />
            <PaymentBadge type="paypal" />
            <PaymentBadge type="amex" />
            <PaymentBadge type="visa" />
          </div>
        </div>
      </div>

      <p className="py-5 text-center text-[13px] text-white/85">
        Copyright © 2026 <span className="text-[#bd2f89]">Sigma Publisher</span>. All Rights Reserved
      </p>
    </footer>
  );
}
