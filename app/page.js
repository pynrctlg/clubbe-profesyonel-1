import InformationTape from "@/components/customers/InformationTape";
import HomeSlider from "@/components/sliders/HomeSlider";
import Newsletter from "@/components/customers/Newsletter";
import ProductApiSquare from "@/components/productItems/ProductApiSquare";
import ProductApiCircle from "@/components/productItems/ProductApiCircle";
import ProductSlider from "@/components/sliders/ProductSlider";
import BrandsSlider from "@/components/sliders/BrandsSlider";
import Catalog from "@/components/catalog/Catalog";
import Discount from "@/components/customers/Discount";

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <InformationTape />
      <ProductApiSquare sliceLimited="4" titleText="Önerilen Ürünler" />
      <Newsletter />
      <BrandsSlider />
      <ProductSlider/>
      <Catalog titleText="Katalog" />
      <Discount />
      <ProductApiCircle sliceLimited="4" titleText="Yeni Ürünler" />
    </main>
  );
}



