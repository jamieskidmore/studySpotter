import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";
import type { Spot } from "@/app/fakeDb";

export default function SpotPreview({ spot }: { spot: Spot }) {
  return (
    <Link href={`/spot/${spot.id}`}>
      <div className="bg-white w-full rounded-md p-5 space-y-4 mb-4">
        <h2 className="text-3xl mb-2 font-bold" style={{ color: "#3590F3" }}>
          {spot.name}
        </h2>
        <div className="grid grid-cols-2">
          <div style={{ color: "#3590F3" }}>
            <p>{spot.address}</p>
            <p>{spot.distance} away</p>
          </div>
          <div className="flex justify-end">
            <FontAwesomeIcon
              icon={regularHeart}
              className="h-12"
              style={{ color: "#C2BBF0" }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={spot.photo}
            alt={spot.name}
            width="400"
            height="300"
          ></Image>
        </div>
      </div>
    </Link>
  );
}
