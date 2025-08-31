import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm i lucide-react

const CompanyCarousel = () => {
  const scrollRef = useRef(null);

  const companies = [
    "JETCRAFT",
    "OVERSTACK",
    "praxis",
    "NSUS",
    "BETCONSTRUCT",
    "DIGITAIN",
    "MONGOGAMING",
    "LIONGAMING",
    "UPgaming",
    "nuxGAME"
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full bg-[#080E1B] py-12">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-[-50px] top-1/2 -translate-y-1/2  text-white rounded-full p-2  shadow-md"
      >
        <ChevronLeft size={54} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-[-50px] top-1/2 -translate-y-1/2   text-white rounded-full p-2  shadow-md"
      >
        <ChevronRight size={54} />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 px-12 scroll-smooth no-scrollbar"
      >
        {companies.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-6 py-3 bg-gray-900 rounded-xl shadow text-xl font-bold text-white uppercase"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCarousel;
