// SingleReview.tsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { Review } from "@/app/fakeDb";

type SingleReviewProps = {
  review: Review;
};

export default function SingleReview({ review }: SingleReviewProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={fasStar}
          className="h-4"
          style={{ color: "#C2BBF0" }}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key={fullStars}
          icon={fasStar}
          className="h-12"
          style={{ color: "#C2BBF0", opacity: 0.5 }}
        />
      );
    }

    // Fill the remaining stars as outlined stars if rating is less than 5
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={fullStars + (hasHalfStar ? 1 : 0) + i}
          icon={farStar}
          className="h-4"
          style={{ color: "#C2BBF0" }}
        />
      );
    }

    return stars;
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <h4 className="text-xl">{review.author}</h4>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-center items-center space-x-1">
          {renderStars(review.rating)}
        </div>
      </div>
      <p>{review.body}</p>
    </div>
  );
}
