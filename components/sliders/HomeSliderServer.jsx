import * as contentRepo from '@/services/content';
import HomeSlider from "@/components/sliders/HomeSlider";

export default async function HomeSliderServer() {
  const data = await contentRepo.getData({
    type: 'product',
  }, 5);
  return (
    <HomeSlider>
      {data}
    </HomeSlider>
  )
}
