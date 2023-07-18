"use client";

import { useEffect, useRef } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const arrow = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 180) {
        arrow.current?.classList.add("right-10");
      } else {
        arrow.current?.classList.remove("right-10");
      }
    };
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      <button
        type="button"
        ref={arrow}
        onClick={scrollTop}
        className="commonBtn text-xs fixed bottom-6 ss:bottom-10 z-30 -right-full transition-all duration-500 shadow-2xl active:p-[.45rem] p-2 rounded"
      >
        <span className="text">
          <BsArrowUp className="text-xl active:text-lg text-white" />
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;
