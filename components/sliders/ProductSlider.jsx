"use client";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import TitleType from "../ui/TitleType";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CircleProductCard from "../cards/CircleProductCard";


export default function ProductSlider({ children }) {

    const navigation = {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev"
    }

    const breakpoints = {
        767: {
            slidesPerView: 2,
            spaceBetween:20
        },
        991: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
    return (
        <div className="bg-sixth lg:mt-20 mt-12 py-14">
            <div className="container productSlider">
                <TitleType titleType="h2" addClass="mb-10">Trend Ürünler</TitleType>
                <Swiper className="container" slidesPerView={1} loop={true} spaceBetween={10} navigation={navigation} breakpoints={breakpoints} modules={[Navigation]}>
                    {children?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <CircleProductCard item={item}/>
                        </SwiperSlide>
                    ))
                    }
                    <button className="absolute top-[70%] left-0 translate-y-[-50%] text-3xl lg:text-3xl text-secondary z-10 arrow-prev"><IoIosArrowDropleftCircle /></button>
                    <button className="absolute top-[70%] right-0  translate-y-[-50%] text-3xl lg:text-3xl text-secondary z-10 arrow-next"><IoIosArrowDroprightCircle /></button>
                </Swiper>
            </div>
        </div>
    );
}
