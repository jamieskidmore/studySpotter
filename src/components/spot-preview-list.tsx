import type { Spot } from "@/app/fakeDb";
import SpotPreview from "./spot-preview";
import { getAllSpots } from "@/app/actions";

export default async function SpotPreviewList() {
  const spots = await getAllSpots();
  if (spots !== undefined)
    return (
      <div className="space-y">
        {spots.map((spot: any) => (
          <SpotPreview key={spot.id} spot={spot} />
        ))}
      </div>
    );
}
