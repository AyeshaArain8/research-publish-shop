"use client";

import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const coverColors = [
  "bg-[#ff2727]",
  "bg-[#0e7792]",
  "bg-[#d8b18d]",
  "bg-[#f6f6f6]",
  "bg-[#027474]",
  "bg-[#6f5735]",
  "bg-[#00645e]",
  "bg-[#111111]",
  "bg-[#b56c31]",
  "bg-[#fff0bc]",
  "bg-[#111827]",
  "bg-[#f6d8b8]",
  "bg-[#b7d8e7]",
  "bg-[#4d5870]",
  "bg-[#104f88]",
];

function BookCover({ title, index }) {
  const color = coverColors[index % coverColors.length];

  return (
    <div
      className={`relative flex h-[174px] w-[120px] overflow-hidden rounded-sm ${color} p-2 shadow-md ring-1 ring-black/10 sm:h-[194px] sm:w-[134px] xl:h-[216px] xl:w-[150px]`}
    >
      <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full bg-white/40" />
      <div className="absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-black/35" />

      <div className="relative z-10 flex h-full w-full items-center justify-center border border-white/45 px-2 text-center">
        <p className="text-[15px] font-black uppercase leading-tight text-white drop-shadow sm:text-[17px]">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function Slider({ title, books = [], id }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="border-b border-[#dddddd] py-7 first:pt-0 overflow-hidden">
      <h2 className="mb-6 text-2xl font-semibold text-[#111827] md:text-[28px]">
        {title}
      </h2>

      <div className="relative w-full overflow-hidden px-2 sm:px-4">

        {/* PREV BUTTON */}
        <button
          ref={prevRef}
          className="absolute left-1 top-1/2 z-50 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* NEXT BUTTON */}
        <button
          ref={nextRef}
          className="absolute right-1 top-1/2 z-50 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
          aria-label="Next"
        >
          ›
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          // navigation={{
          //   prevEl: prevRef.current,
          //   nextEl: nextRef.current,
          // }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          slidesPerView={1.6}
          spaceBetween={18}
          watchOverflow={true}
          breakpoints={{
            520: { slidesPerView: 2.5, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            1180: { slidesPerView: 5.5, spaceBetween: 30 },
            1450: { slidesPerView: 6 },
          }}
        >
          {books.map((book, index) => (
            <SwiperSlide key={book.id || `${book.title}-${index}`}>
              <article className="w-full max-w-[120px] sm:max-w-[134px] xl:max-w-[150px]">
                <BookCover title={book.title} index={index} />

                <h3 className="mt-3 min-h-[2rem] text-[11px] font-black leading-tight break-words xl:text-xs">
                  {book.title}
                </h3>

                <p className="text-[11px] text-[#343b46]">{book.author}</p>

                <p className="text-[10px] text-[#8a94a3]">
                  Genre: {book.genre}
                </p>

                <p className="mt-2 text-[11px] font-bold">
                  {book.format}{" "}
                  <span className="ml-2 text-[15px]">${book.price}</span>
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}