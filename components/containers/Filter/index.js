"use client";
import ProductSquareContent from "@/components/contents/ProductSquareContent";
import TitleType from "@/components/ui/TitleType";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
export default function Filter({ data }) {
  const categories = [
    ...new Set(data.map((product) => product.attributes.category)),
  ];
  const brands = [...new Set(data.map((product) => product.attributes.brands))];

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const filterProductsByType = (category) => {
    if (selectedTypes.includes(category)) {
      setSelectedTypes(
        selectedTypes.filter((selectedType) => selectedType !== category)
      );
    } else {
      setSelectedTypes([...selectedTypes, category]);
    }
  };

  const filterProductsByBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const filteredProducts = data.filter((product) => {
    if (selectedTypes.length > 0 && selectedBrands.length > 0) {
      return (
        selectedTypes.includes(product.attributes.category) &&
        selectedBrands.includes(product.attributes.brands)
      );
    } else if (selectedTypes.length > 0) {
      return selectedTypes.includes(product.attributes.category);
    } else if (selectedBrands.length > 0) {
      return selectedBrands.includes(product.attributes.brands);
    } else {
      return true;
    }
  });

  return (
    <>
      <div className="basis-full sm:basis-1/6">
        <div className="z-10 w-full px-4 py-6 bg-white rounded-lg shadow-md mb-4">
          <TitleType
            titleType="h2"
            addClass="!mb-2 !text-lg !text-left font-medium text-secondary"
          >
            Katagoriler
          </TitleType>
          <ul className="space-y-2 text-sm">
            {categories?.map((typeItem, index) => (
              <li className="flex items-center" key={`type-${index}`}>
                <input
                  onChange={(e) => filterProductsByType(e.target.value)}
                  id={`${typeItem}-${index}`}
                  type="checkbox"
                  value={typeItem}
                  className="w-4 h-4 text-third bg-white border-seventh rounded focus:ring-third border-spacing-1 border-solid"
                />
                <label
                  htmlFor={`${typeItem}-${index}`}
                  className="ml-2 text-sm font-medium text-seventh capitalize"
                >
                  {typeItem}
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
            {brands?.map((brandItem, index) => (
              <li className="flex items-center" key={`brand-${index}`}>
                <input
                  onChange={(e) => filterProductsByBrand(e.target.value)}
                  id={`${index}-${brandItem}`}
                  type="checkbox"
                  value={brandItem}
                  className="w-4 h-4 text-third bg-white border-seventh rounded focus:ring-third border-spacing-1 border-solid"
                />
                <label
                  htmlFor={`${index}-${brandItem}`}
                  className="ml-2 text-sm font-medium text-seventh"
                >
                  {brandItem}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center px-3 py-1 bg-sixth">
          <i className="text-xs text-seventh">
            Toplam Ürün Sayısı : {data.length}
          </i>
          <div className="relative mr-6 my-2">
            <input
              type="search"
              className="bg-purple-white shadow rounded border-0 p-3 h-10"
              placeholder="Ürün ara"
              onChange={(e)=>searchInput(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <CiSearch />
            </div>
          </div>
        </div>
        <ProductSquareContent
          addClass="basis-full sm:basis-5/6 !mt-0"
          gridAddClass="md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          data={filteredProducts}
        />
      </div>
    </>
  );
}
