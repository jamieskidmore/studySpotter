"use client";

export default function AddSpotButton() {
  return (
    <button
      className="w-full rounded-md text-2xl text-white p-2"
      style={{ backgroundColor: "#C2BBF0" }}
      onClick={() => (window.location.href = "/add")}
    >
      ADD SPOT
    </button>
  );
}
