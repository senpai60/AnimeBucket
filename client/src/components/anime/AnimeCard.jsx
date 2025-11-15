import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimeCard({
  title,
  image,
  description,
  score,
  episodes,
  year,
  genres = [],
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.set(el, { transformStyle: "preserve-3d" });

    const enter = () => {
      gsap.to(el, {
        y: -10,
        rotate: -1.5,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(el, {
        y: 0,
        rotate: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className="flex justify-center items-center font-inter">
      <div
        ref={cardRef}
        className="
        relative w-96 bg-[#f5f1e8] border-[4px] border-[#4d4c4a] rounded-2xl
        shadow-[12px_12px_0px_#4d4c4a] p-5 flex flex-col
        transition-all duration-300 ease-out
        "
      >
        {/* HEADER */}
        <div className="flex items-center mb-3">
          <div
            className="
            w-12 h-12 rounded-full
            bg-gradient-to-br from-orange-300 to-orange-500
            border-[3px] border-[#4d4c4a]
            shadow-[4px_4px_0px_#4d4c4a]
          "
          ></div>

          <h2 className="ml-4 text-lg font-bold text-[#4d4c4a] leading-tight">
            {title}
          </h2>
        </div>

        {/* IMAGE */}
        <div
          className="
          bg-[#d8d2c6] p-2 rounded-xl border-[3px] border-[#4d4c4a]
          shadow-inner shadow-[#b3ac9f]
        "
        >
          <img
            src={image}
            alt={title}
            className="
              w-full h-52 object-cover rounded-lg
              border-[3px] border-[#4d4c4a]
              transition-transform duration-300
            "
          />
        </div>

        {/* META GRID (Score / Episodes / Year) */}
        <div className="mt-3 grid grid-cols-3 text-center text-[#4d4c4a] font-semibold text-sm">
          <p>⭐ {score}</p>
          <p>🎬 {episodes}</p>
          <p>📅 {year}</p>
        </div>

        {/* GENRES */}
        <div className="flex flex-wrap gap-2 mt-2 justify-start">
          {genres.map((g) => (
            <span
              key={g}
              className="
                bg-blue-300 px-3 py-1 rounded-lg border-[2px] border-[#4d4c4a]
                shadow-[2px_2px_0px_#4d4c4a]
                text-xs font-bold text-[#4d4c4a]
              "
            >
              {g}
            </span>
          ))}
        </div>

        {/* DESCRIPTION (SHORTENED HEIGHT) */}
        <p className="mt-3 text-sm text-[#4d4c4a] font-medium leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* ACTIONS */}
        <div className="flex justify-between mt-4">
          <button
            className="
              bg-[#e65e5e] px-4 py-2 rounded-xl border-[3px] border-[#4d4c4a]
              shadow-[0_6px_0_#c14242,0_8px_0_#4d4c4a]
              active:translate-y-[6px]
              active:shadow-[0_0_0_#c14242,0_6px_0_#4d4c4a]
              transition-all text-sm font-bold
          "
          >
            ❤️ Favorite
          </button>

          <button
            className="
              bg-[#61c470] px-4 py-2 rounded-xl border-[3px] border-[#4d4c4a]
              shadow-[0_6px_0_#45a253,0_8px_0_#4d4c4a]
              active:translate-y-[6px]
              active:shadow-[0_0_0_#45a253,0_6px_0_#4d4c4a]
              transition-all text-sm font-bold
          "
          >
            ➕ Playlist
          </button>
        </div>
      </div>
    </div>
  );
}
