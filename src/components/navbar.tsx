import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

export default function BottomNavbar() {
  const iconColor = "#3590F3";
  const iconSize = "lg";

  return (
    <>
      <div className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full"></div>
      <div
        className="fixed bottom-0 w-full p-4 flex justify-between items-center max-h-32"
        style={{ backgroundColor: "#62BFED" }}
      >
        <FontAwesomeIcon
          icon={faMapPin}
          className="h-10"
          style={{ color: iconColor }}
          size={iconSize}
        />

        <FontAwesomeIcon
          icon={faHome}
          className="h-10 ml-6"
          style={{ color: iconColor }}
          size={iconSize}
        />

        <FontAwesomeIcon
          icon={faUser}
          className="h-10"
          style={{ color: iconColor }}
          size={iconSize}
        />
      </div>
    </>
  );
}
