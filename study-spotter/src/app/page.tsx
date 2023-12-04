import Image from "next/image";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Search from "@/components/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-4 items-center mt-5 text-2xl">
      <Search></Search>
      <div className="bg-white w-full rounded-md p-5 space-y-4">
        <h2 className="text-3xl mb-2 font-bold" style={{ color: "#3590F3" }}>
          Spot Name
        </h2>
        <div className="grid grid-cols-2">
          <div style={{ color: "#3590F3" }}>
            <p>Address</p>
            <p>Distance</p>
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
            src="https://cdn.discordapp.com/attachments/1156321096572866580/1181237006005710988/img-placeholder.webp?ex=658053b0&is=656ddeb0&hm=b61da144f1213218077ef2a7b791f3be008857804c60db28724c75d0ab482ce7&"
            alt="placeholder"
            width="400"
            height="300"
          ></Image>
        </div>
      </div>
    </main>
  );
}
