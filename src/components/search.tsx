"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Search() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([""]);
  const [noiseLevel, setNoiseLevel] = useState(50);
  const [selectedHours, setSelectedHours] = useState([""]);
  const [searchTerm, setSearchTerm] = useState("");
  const [queryString, setQueryString] = useState("");

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

  const openTimes = ["Weekdays", "Weekends", "24/7"];

  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const toggleHour = (openingTime: string) => {
    if (selectedHours.includes(openingTime)) {
      setSelectedHours(selectedHours.filter((s) => s !== openingTime));
    } else {
      setSelectedHours([...selectedHours, openingTime]);
    }
  };

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const submitSearch = async () => {
    const querystring = searchTerm + "&" + selectedAmenities.toString();
    // localStorage.setItem("searchTerm", searchTerm);
    // localStorage.setItem("amenities", selectedAmenities.toString());
    window.location.href = "/results/" + querystring;
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  return (
    <>
      {!showMenu && (
        <div>
          <div className="flex items-center space-x-2">
            <p
              style={{
                color: "#3590F3",
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </p>
            <input
              type="text"
              placeholder="search study spots..."
              className="p-2 m-1 rounded-md text-3xl"
              style={{
                border: "4px solid #3590F3",
                color: "#3590F3",
              }}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button
              className="px-2 py-1 items-center"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FontAwesomeIcon
                icon={faFilter}
                className="h-14"
                style={{ color: "#3590F3" }}
              />
            </button>
          </div>
        </div>
      )}

      {showMenu && (
        <div className="rounded-md" style={{ backgroundColor: "#3590F3" }}>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="search study spots..."
              className="p-2 m-1 rounded-md text-3xl"
              style={{
                border: "4px solid #3590F3",
                color: "#3590F3",
              }}
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button
              className="px-2 py-1 items-center"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FontAwesomeIcon
                icon={faFilter}
                className="h-14"
                style={{ color: "white" }}
              />
            </button>
          </div>
          <div className="p-2 mt-2 space-y-4">
            <select
              id="buildingSelect"
              name="building"
              className="rounded-md p-2"
              style={{ color: "#3590F3" }}
            >
              <option value="" disabled selected>
                Select a Building
              </option>
              <option value="building1">DTC</option>
            </select>
            <div>
              <h3>Amenities</h3>
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
              <h3>Noise Level</h3>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(+e.target.value)}
                className="w-full border border-3 border-white"
              />
            </div>

            <div>
              <h3>Hours</h3>
              <div
                className="bg-white rounded-md p-1 grid grid-cols-3 gap-2 max-w-[440px]"
                style={{ color: "#3590F3" }}
              >
                {openTimes.map((time, index) => (
                  <div
                    key={index}
                    className={`flex text-lg items-center space-x-2 cursor-pointer ${
                      selectedHours.includes(time)
                        ? "bg-blue-500 text-white"
                        : "bg-white text-blue-500"
                    } p-2`}
                    onClick={() => toggleHour(time)}
                  >
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="w-full rounded-md"
              style={{ backgroundColor: "#C2BBF0" }}
              onClick={submitSearch}
            >
              APPLY
            </button>
          </div>
        </div>
      )}
    </>
  );
}
