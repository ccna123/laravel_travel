import React, { useState } from "react";

export const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, index) => {
        const ratingVal = index + 1;
        return (
          <label className="cursor-pointer" key={star}>
            <input
              type="radio"
              className="hidden"
              value={ratingVal}
              onClick={() => setRating(ratingVal)}
            />
            <i
              className={`fa-solid fa-star fa-xl transition-colors duration-150 ${
                ratingVal <= (hover || rating) ? "text-yellow-300" : ""
              }`}
              onMouseEnter={() => setHover(ratingVal)}
              onMouseLeave={() => setHover(null)}
            ></i>
          </label>
        );
      })}
    </div>
  );
};
