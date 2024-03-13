'use client';
import Image from "next/image";
import Slider from "react-slick";

export default function BrandsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-container lg:mt-20 mt-12 brandsSlider">
      <Slider {...settings}>
        <div>
          <div className="w-[170px] h-[93px] relative m-auto">
            <Image src="/brands/b1.png" fill className="object-contain" alt="brands 1" />
          </div>
        </div>
        <div>
          <div className="w-[170px] h-[93px] relative m-auto">
            <Image src="/brands/b2.png" fill className="object-contain" alt="brands 2" />
          </div>
        </div>
        <div>
          <div className="w-[170px] h-[93px] relative m-auto">
            <Image src="/brands/b3.png" fill className="object-contain" alt="brands 3" />
          </div>
        </div>
        <div>
          <div className="w-[170px] h-[93px] relative m-auto">
            <Image src="/brands/b4.png" fill className="object-contain" alt="brands 4" />
          </div>
        </div>
        <div>
          <div className="w-[170px] h-[93px] relative m-auto">
            <Image src="/brands/b5.png" fill className="object-contain" alt="brands 5" />
          </div>
        </div>
      </Slider>
    </div>
  )
}