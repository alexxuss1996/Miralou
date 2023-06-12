import React from 'react';
import { FaStar } from 'react-icons/fa';
type RatingType = { rating: number };
export const StarRating = ({ rating }: RatingType) => {
  return (
    <div className="flex h-5 w-[100px] flex-row items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} color={index < rating ? '#4d6860' : '#efeef1'} />
      ))}
    </div>
  );
};
