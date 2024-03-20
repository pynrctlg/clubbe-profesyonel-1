import InformationTape from "@/components/customers/InformationTape";
import HomeSliderServer from "@/components/sliders/HomeSliderServer";
import Newsletter from "@/components/customers/Newsletter";
import ProductApiSquare from "@/components/products/ProductApiSquare";
import ProductApiCircle from "@/components/products/ProductApiCircle";
import BrandsSlider from "@/components/sliders/BrandsSlider";
import Catalog from "@/components/article/Article";
import Discount from "@/components/customers/Discount";
import ProductSliderServer from "@/components/sliders/ProductSliderServer";
import WhyChoose from "@/components/customers/WhyChoose";

export default function Home() {
  return (
    <main>
      <HomeSliderServer />
      <InformationTape />
      <ProductApiSquare sliceLimited="4" titleText="Önerilen Ürünler" />
      <WhyChoose/>
      <Newsletter />
      <BrandsSlider />
      <ProductSliderServer />
      <Catalog titleText="Katalog" />
      <Discount />
      <ProductApiCircle sliceLimited="4" titleText="Yeni Ürünler" />
    </main>
  );
}



