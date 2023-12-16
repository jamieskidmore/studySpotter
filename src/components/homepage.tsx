"use client";
import AddSpotButton from "./add-spot-button";
import Search from "./search";

export default function Homepage({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Search></Search>
      <AddSpotButton></AddSpotButton>
      {children}
    </>
  );
}
