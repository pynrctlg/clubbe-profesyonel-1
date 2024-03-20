import * as contentRepo from '@/services/content';
import ProductSlider from "@/components/sliders/ProductSlider";

export default async function ProductSliderServer() {
  const data = await contentRepo.getData({
    type: 'product',
  }, 5);
  return (
    <ProductSlider>
      {data}
    </ProductSlider>
  )
}
