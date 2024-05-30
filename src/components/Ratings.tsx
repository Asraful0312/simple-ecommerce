import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Ratings = ({ rating = 0 }: { rating?: number }) => {
  const ratingStar = Array.from({ length: 5 }, (_r, i) => {
    const number = i + 0.5;
    return rating >= i + 1 ? (
      <FaStar className="text-yellow-400 flex-shrink-0  size-4" />
    ) : rating >= number ? (
      <FaStarHalfAlt className="text-yellow-400 flex-shrink-0 size-4" />
    ) : (
      <FaRegStar className="text-yellow-400 flex-shrink-0 size-4" />
    );
  });
  return (
    <div className="flex items-center gap-3 ">
      <div className="flex gap-1">{ratingStar}</div>
      <span className="text-gray-500 text-sm">({rating})</span>
    </div>
  );
};

export default Ratings;
