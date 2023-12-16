import React, { useState, useEffect } from "react";
import { getAmenitiesForSpot } from "@/app/actions";
import ResultsList from "@/components/results-list";
import Homepage from "@/components/homepage";

export default function Results({
  params,
}: {
  params: { querystring: string };
}) {
  if (!params || !params.querystring) {
    return <p>Invalid query parameters</p>;
  }

  const searchValues = params.querystring.split("%26");
  const searchTerm = searchValues[0];

  function cleanArrayTemplate(template: any) {
    let cleanedTemplate;
    if (template.startsWith("%2C")) {
      cleanedTemplate = template.slice(3);
    } else {
      template.split("%26");
      template[1].slice(3);

      cleanedTemplate = template[1];
    }

    const decodedString = decodeURIComponent(cleanedTemplate);

    return decodedString.split(",");
  }

  let amenities;
  if (searchValues[1]) {
    const cleanedArray = cleanArrayTemplate(searchValues[1]);
    amenities = cleanedArray;
  }
  amenities = amenities?.toString();

  return (
    <main className="flex min-h-screen flex-col space-y-4 items-center mt-5 text-2xl">
      <h2 className="text-3xl mb-2 font-bold" style={{ color: "#3590F3" }}>
        Search Results
      </h2>
      <ResultsList searchTerm={searchTerm} amenities={amenities} />
    </main>
  );
}
