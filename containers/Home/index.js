import HomeSlider from "@/components/sliders/HomeSlider";
import Discount from "@/components/customers/Discount";
import InformationTape from "@/components/customers/InformationTape";
import Newsletter from "@/components/customers/Newsletter";
import WhyChoose from "@/components/customers/WhyChoose";
import ProductCircleContent from "@/components/contents/ProductCircleContent";
import ProductSquareContent from "@/components/contents/ProductSquareContent";
import BrandsSlider from "@/components/sliders/BrandsSlider";
import * as contentRepo from "@/services/content";
import ProductSlider from "@/components/sliders/ProductSlider";
import ArticleContent from "@/components/contents/ArticleContent";

const data = await contentRepo.getData({
  type: "product",
});

export default function HomeContainer() {
  return (
    <>
      <HomeSlider data={data} />
      <InformationTape />
      <ProductSquareContent
        data={data}
        sliceLimited="4"
        titleText="Önerilen Ürünler"
      />
      <WhyChoose />
      <Newsletter />
      <BrandsSlider />
      <ProductSlider data={data} sliceLimited="6" />
      <ArticleContent titleText="Makale" />
      <Discount />
      <ProductCircleContent
        data={data}
        sliceLimited="4"
        titleText="Yeni Ürünler"
      />
    </>
  );
}
