"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddSpot() {
  const amenities = [
    "Adjustable Tables",
    "Computers",
    "Fast Wifi",
    "Power Outlets",
    "Seat Comfort",
    "Temp. Control",
    "Water Fountain",
    "Bathrooms",
    "Couches",
    "Natural Lighting",
    "Restaurants",
    "Security",
    "Vending Machine",
    "Wheelchair Access",
  ];

  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const [selectedAmenities, setSelectedAmenities] = useState([""]);
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file);
  };

  return (
    <main
      className="flex min-h-screen flex-col space-y-4 items-center mt-5 max-w-[400px]"
      style={{ color: "#3590F3" }}
    >
      <Link href="/" className="self-start">
        &#8592; Back
      </Link>
      <h2 className="text-3xl mb-2 font-bold">Add Spot</h2>
      <form action="" method="post" className="text-2xl space-y-4">
        <div className="bg-white w-full rounded-md p-5 space-y-4">
          <div>
            <label htmlFor="spotName">Spot Name</label>
            <div>
              <input
                type="text"
                id="spotName"
                name="spotName"
                className="w-full text-white p-2 rounded-md"
                style={{ backgroundColor: "#8FB8ED" }}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="spotAddress" className="text-2xl">
              Spot Address
            </label>
            <div>
              <input
                type="text"
                id="spotAddress"
                name="spotAddress"
                className="w-full text-white p-2 rounded-md"
                style={{ backgroundColor: "#8FB8ED" }}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="spotDescription" className="text-2xl">
              Spot Description
            </label>
            <div>
              <textarea
                id="spotDescription"
                name="spotDescription"
                className="w-full text-white p-2 rounded-md"
                style={{ backgroundColor: "#8FB8ED" }}
                required
              ></textarea>
            </div>
          </div>

          <div>
            <h3 className="text-2xl">Amenities</h3>
            <div
              className="bg-white p-1 grid grid-cols-2 gap-2 max-w-[440px]"
              style={{ color: "#3590F3" }}
            >
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className={`flex text-lg items-center space-x-2 cursor-pointer ${
                    selectedAmenities.includes(amenity)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  }  p-2`}
                  onClick={() => toggleAmenity(amenity)}
                >
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="spotImage" className="text-2xl">
              Spot Image
            </label>
            <div>
              <input
                type="file"
                id="spotImage"
                name="spotImage"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-white p-2 rounded-md"
                style={{ backgroundColor: "#8FB8ED" }}
              />
            </div>
          </div>
        </div>

        <div>
          <input
            type="submit"
            value="SUBMIT"
            className="w-full rounded-md text-2xl text-white p-2"
            style={{ backgroundColor: "#C2BBF0" }}
            disabled={true}
          />
        </div>
      </form>
    </main>
  );
}
