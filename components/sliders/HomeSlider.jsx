'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";
import ButtonType from "../ui/ButtonType";
import TitleType from "../ui/TitleType";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

export default function HomeSlider() {
  const pagination = {
    clickable: true,
   
  }
  const navigation={
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev" 
  }

  return (
    <Swiper className="relative bg-[#F2F0FF] !min-h-[500px] lg:h-[calc(100vh_-_122px)] h-[calc(100vh_-_61px)]" navigation={navigation} pagination={pagination} modules={[Navigation, Pagination]} >
      <SwiperSlide>
      <div className="flex min-h-full flex-col-reverse lg:flex-row gap-5 justify-center lg:justify-between items-center container">
            <div className="text-center lg:text-left px-3 lg:px-0 flex flex-col gap-4 max-w-md font-bold">
              <TitleType titleType="h3" addClass="text-third line-clamp-1 !text-base !text-left">Best Furniture For Your Castle....</TitleType>
              <TitleType addClass="line-clamp-3" titleType="h1">
                New Furniture Collection
                Trends in 2024
                New Furniture Collection
                Trends in 2024
              </TitleType>
              <p className="text-base lg:text-base text-[#8A8FB9] line-clamp-2 lg:line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.
                yerde!
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.
                yerde!
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.
                yerde!
              </p>
              <div>
                <ButtonType url="/product" title="Ürünler" >Ürünler</ButtonType>
              </div>
            </div>
            <div className="max-w-[300px] lg:max-w-none w-[60%] lg:w-auto">
              <Image
                src="/s1.png"
                priority={true}
                alt="Clubbe"
                width={500}
                height={500}
              />
            </div>
          </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="flex min-h-full flex-col-reverse lg:flex-row gap-5 justify-center lg:justify-between items-center container">
            <div className="text-center lg:text-left px-3 lg:px-0 flex flex-col gap-4 max-w-md font-bold">
              <TitleType titleType="h3" addClass="text-third line-clamp-1 !text-base !text-left">Best Furniture For Your Castle....</TitleType>
              <TitleType addClass="line-clamp-3" titleType="h1">
                New Furniture Collection
                Trends in 2024
                New Furniture Collection
                Trends in 2024
              </TitleType>
              <p className="text-base lg:text-base text-[#8A8FB9] line-clamp-2 lg:line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.
                yerde!
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.
                yerde!
              </p>
              <div>
                <ButtonType url="/product" title="Ürünler" >Ürünler</ButtonType>
              </div>
            </div>
            <div className="max-w-[300px] lg:max-w-none w-[60%] lg:w-auto">
              <Image
                src="/s2.png"
                priority={true}
                alt="Clubbe"
                width={500}
                height={500}
              />
            </div>
          </div>
      </SwiperSlide>
      <button className="absolute top-[50%] left-1 lg:left-3 translate-y-[-50%] text-3xl lg:text-5xl text-secondary z-10 arrow-prev"><IoIosArrowDropleftCircle /></button>
        <button className="absolute top-[50%] right-1 lg:right-3 translate-y-[-50%] text-3xl lg:text-5xl text-secondary z-10 arrow-next"><IoIosArrowDroprightCircle /></button>
    </Swiper>
  );
}
