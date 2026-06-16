export default function Hero() {
  return (
    <section className="mx-auto max-w-[1670px] px-4 pt-7 md:px-8 xl:px-[125px]">
      <div className="relative min-h-[230px] overflow-hidden rounded-[20px] bg-[#244d5a] text-white md:min-h-[382px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_35%,rgba(189,47,137,.45),transparent_22%),radial-gradient(circle_at_88%_34%,rgba(18,109,162,.62),transparent_24%),linear-gradient(90deg,rgba(0,0,0,.58),rgba(0,0,0,.30),rgba(0,0,0,.62))]" />
        <div className="absolute -left-8 top-8 h-72 w-40 rotate-[-20deg] rounded bg-[#671b2f] p-5 shadow-2xl md:h-[430px] md:w-60">
          <p className="text-3xl font-black uppercase leading-none text-white/80 md:text-5xl">All the Light</p>
        </div>
        <div className="absolute right-4 top-7 h-56 w-40 rotate-[17deg] rounded bg-[#0e557c] p-4 shadow-2xl md:right-20 md:h-[350px] md:w-60">
          <p className="text-3xl font-black uppercase leading-none text-white/80 md:text-5xl">Karma</p>
        </div>
        <div className="relative z-10 flex min-h-[230px] flex-col items-center justify-center px-5 text-center md:min-h-[382px]">
          <p className="text-xs font-black uppercase tracking-[0.30em]">We're here to help you!</p>
          <h1 className="mt-2 text-[42px] font-black uppercase leading-none md:text-[58px]">Shop</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 md:text-xl">"Interested in chatting? We look forward to hearing from you!<br />Feel free to schedule a free demo today."</p>
          <button className="mt-7 rounded bg-[#bd2f89] px-10 py-4 text-sm font-bold">Shop Now</button>
          <span className="mt-3 text-[10px] text-white/80">No credit card required</span>
        </div>
      </div>
    </section>
  );
}
