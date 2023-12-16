import SpotPreviewList from "@/components/spot-preview-list";
import Homepage from "@/components/homepage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-4 items-center mt-5 text-2xl">
      <Homepage>
        <SpotPreviewList />
      </Homepage>
    </main>
  );
}
