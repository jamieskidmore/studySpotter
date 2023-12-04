import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

export default function SingleReview() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h4 className="text-xl">Hani</h4>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-center items-center space-x-1">
          <FontAwesomeIcon
            icon={fasStar}
            className="h-4"
            style={{ color: "#C2BBF0" }}
          />
          <FontAwesomeIcon
            icon={fasStar}
            className="h-4"
            style={{ color: "#C2BBF0" }}
          />
          <FontAwesomeIcon
            icon={fasStar}
            className="h-4"
            style={{ color: "#C2BBF0" }}
          />
          <FontAwesomeIcon
            icon={farStar}
            className="h-4"
            style={{ color: "#C2BBF0" }}
          />
          <FontAwesomeIcon
            icon={farStar}
            className="h-4"
            style={{ color: "#C2BBF0" }}
          />
        </div>
      </div>
      <p>I love this spot!</p>
    </div>
  );
}
