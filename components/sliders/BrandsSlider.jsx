'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from "next/image";

export default function BrandsSlider() {
  const brandListImage = [
    {
      id: "1",
      name: "marka 1",
      image: '/brands/b1.png'
    },
    {
      id: "2",
      name: "marka 2",
      image: '/brands/b2.png'
    },
    {
      id: "3",
      name: "marka 3",
      image: '/brands/b3.png'
    },
    {
      id: "4",
      name: "marka 4",
      image: '/brands/b4.png'
    },
    {
      id: "5",
      name: "marka 5",
      image: '/brands/b5.png'
    }
  ]
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          }
        }}
        className="slider-container lg:mt-20 mt-12 brandsSlider"
      >
        {
          brandListImage?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[170px] h-[93px] relative m-auto">
                <Image src={item.image}  width="0"
                        height="0"
                        sizes="100vw" priority className="object-contain w-auto h-auto" alt={item.name} />
              </div>
            </SwiperSlide>
          ))
        }


      </Swiper>
    </>
  )
}