"use client";
import Slider from "react-slick";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Image from "next/image";
import ButtonType from "../ui/ButtonType";
import TitleType from "../ui/TitleType";

export default function HomeSlider() {
  function NextBtn({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute top-[50%] right-1 lg:right-3 translate-y-[-50%] text-3xl lg:text-5xl text-secondary z-10"
      >
        <IoIosArrowDroprightCircle />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute top-[50%] left-1 lg:left-3 translate-y-[-50%] text-3xl lg:text-5xl text-secondary z-10"
      >
        <IoIosArrowDropleftCircle />
      </button>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };
  return (
    <div>
      <Slider {...settings} className="relative bg-[#F2F0FF]">
        <div className="slider-item">
          <div className="flex flex-col-reverse lg:flex-row gap-5 justify-center lg:justify-between items-center lg:h-[calc(100vh_-122px)] h-[calc(100vh_-61px)] container">
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

        </div>
        <div className="slider-item">
          <div className="flex flex-col-reverse lg:flex-row gap-5 justify-center lg:justify-between items-center lg:h-[calc(100vh_-122px)] h-[calc(100vh_-61px)] container">
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

        </div>
      </Slider>
    </div>
  );
}
