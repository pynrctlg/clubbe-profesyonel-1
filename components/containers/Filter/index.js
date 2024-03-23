"use client";
import ProductSquareContent from "@/components/contents/ProductSquareContent";
import TitleType from "@/components/ui/TitleType";
import { useState } from "react";

export default function Filter({ data }) {
  const [chosen, setChosen] = useState();
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="basis-full sm:basis-1/6">
        <div className="z-10 w-full px-4 py-6 bg-white rounded-lg shadow-md mb-4">
          <TitleType
            titleType="h2"
            addClass="!mb-2 !text-lg !text-left font-medium text-secondary"
          >
            Katagoriler
          </TitleType>
          <ul className="space-y-2 text-sm">
            {data.map((typeItem) => (
              <li className="flex items-center" key={`type-${typeItem.id}`}>
                <input
                  onChange={(event) => setChosen(event.target.value)}
                  id={`${typeItem.attributes.type}-${typeItem.id}`}
                  type="checkbox"
                  value={typeItem.attributes.type}
                  className="w-4 h-4 text-third bg-white border-seventh rounded focus:ring-third border-spacing-1 border-solid"
                />
                <label
                  for={`${typeItem.attributes.type}-${typeItem.id}`}
                  className="ml-2 text-sm font-medium text-seventh"
                >
                  {typeItem.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="z-10 w-full px-4 py-6 bg-white rounded-lg shadow-md mb-4">
          <TitleType
            titleType="h2"
            addClass="!mb-2 !text-lg !text-left font-medium text-secondary"
          >
            Markalar
          </TitleType>
          <ul className="space-y-2 text-sm">
            {data.map(
              (brandItem) =>
              brandItem.attributes.brand && (
                  <li className="flex items-center" key={`brand-${brandItem.id}`}>
                    <input
                      onChange={(event) => setChosen(event.target.value)}
                      id={`${brandItem.id}-${brandItem.attributes.brand}`}
                      type="checkbox"
                      value={brandItem.attributes.brand}
                      className="w-4 h-4 text-third bg-white border-seventh rounded focus:ring-third border-spacing-1 border-solid"
                    />
                    <label
                      for={`${brandItem.id}-${brandItem.attributes.brand}`}
                      className="ml-2 text-sm font-medium text-seventh"
                    >
                      {brandItem.attributes.brand}
                    </label>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
      <ProductSquareContent
        addClass="basis-full sm:basis-5/6 !mt-0"
        gridAddClass="md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        data={data}
        selected={chosen}
      />
    </div>
  );
}
