const menuItems = ["Home", "Shop", "Blog", "Page", "Vendor"];

function BirdLogo() {
  return (
    <svg viewBox="0 0 80 72" className="h-14 w-14 shrink-0" aria-hidden="true">
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

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <BirdLogo />
      <div className="leading-none">
        <p className="font-serif text-[24px] font-bold tracking-wide text-[#bd2f89]">
          SIGMA PUBLISHER
        </p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.45em] text-[#d99000]">
          Research Meets Publish
        </p>
      </div>
    </div>
  );
}

function CartIcon() {
  return (
    <button className="relative grid h-10 w-10 place-items-center text-[#1f2937]" aria-label="Cart">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 6h15l-2 8H8L6 3H3" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
      </svg>
      <span className="absolute right-0 top-0 h-5 w-5 rounded-full bg-[#bd2f89] text-center text-xs font-bold leading-5 text-white">
        0
      </span>
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="border-b border-[#ecece6] bg-[#f7f7f1] text-[13px] uppercase text-[#26384d]">
        <div className="mx-auto flex h-[54px] max-w-[1670px] items-center justify-between px-4 md:px-8 xl:px-[125px]">
          <div className="flex gap-6">
            <span>Membership</span>
            <span>Coupons & Deals</span>
            <span>Bestsellers</span>
          </div>
          <div className="hidden gap-6 md:flex">
            <span>My Account</span>
            <span>Wishlist</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1670px] items-center gap-6 px-4 py-6 md:px-8 xl:px-[125px]">
        <Logo />

        <div className="ml-auto hidden h-[60px] flex-1 max-w-[770px] items-center border border-[#e1e5eb] lg:flex">
          <select className="h-full w-48 border-r border-[#e4e7ec] bg-[#fafafa] px-6 text-xl text-[#667085] outline-none">
            <option>All Category</option>
          </select>
          <input
            className="h-full flex-1 px-6 text-xl text-[#667085] outline-none"
            placeholder="Search products..."
          />
          <button className="grid h-full w-[85px] place-items-center bg-[#bd2f89] text-white" aria-label="Search">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="6" />
              <path d="M16 16l4 4" />
            </svg>
          </button>
        </div>

        <button className="hidden h-[48px] rounded-[4px] border border-[#177a53] px-8 text-[18px] font-semibold uppercase text-[#177a53] md:block">
          Bookshop Finder
        </button>

        <CartIcon />
      </div>

      <nav className="bg-[#0d689d] text-white">
        <div className="mx-auto flex h-[64px] max-w-[1670px] items-center px-4 text-[17px] font-bold md:px-8 xl:px-[125px]">
          <button className="mr-10 hidden h-full bg-[#177caf] px-8 uppercase md:block">
            ☰ All Departments
          </button>

          <div className="flex flex-1 gap-10">
            {menuItems.map((item) => (
              <a href="#" key={item}>
                {item}<span className="text-xs">▼</span>
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded bg-[#bd2f89] px-3 py-2 text-sm uppercase">Notice</span>
            <span>Covid 19 Update: We are open for business</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
