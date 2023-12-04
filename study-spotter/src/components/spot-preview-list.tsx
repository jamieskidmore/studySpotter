import type { Spot } from "@/app/fakeDb";
import SpotPreview from "./spot-preview";

export default function SpotPreviewList({ spots }: { spots: Spot[] }) {
  console.log(spots);
  return (
    <div className="space-y">
      {spots.map((spot) => (
        <SpotPreview key={spot.id} spot={spot} />
      ))}
    </div>
  );
}
