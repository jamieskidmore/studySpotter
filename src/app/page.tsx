import Search from "@/components/search";
import SpotPreviewList from "@/components/spot-preview-list";
import AddSpotButton from "@/components/add-spot-button";
import { db } from "./fakeDb";

export default function Home() {
  const spots = db.spots;
  console.log(spots);
  return (
    <main className="flex min-h-screen flex-col space-y-4 items-center mt-5 text-2xl">
      <Search></Search>
      <AddSpotButton></AddSpotButton>
      <SpotPreviewList spots={spots}></SpotPreviewList>
    </main>
  );
}
