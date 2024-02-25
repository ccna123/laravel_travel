import React, { useEffect, useState } from "react";

export const BackToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 960,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showBtn && (
        <button
          type="button"
          className="bg-black rounded-full p-4 fixed right-[50px] bottom-[50px] hover:scale-105 duration-150"
          onClick={handleGoToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
