"use client";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import TitleType from "../ui/TitleType";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function ProductSlider() {

    const pagination = {
        clickable: true,
    }
    const navigation = {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev"
    }
    return (
        <div className="bg-[#F2F0FF] lg:mt-20 mt-12 py-14">
            <div className="container productSlider">
                <TitleType titleType="h2" addClass="mb-10">Trend Ürünler</TitleType>
                <Swiper className="container productSlider" navigation={navigation} pagination={pagination} modules={[Navigation, Pagination]}>
                    <SwiperSlide>
                        1
                    </SwiperSlide>
                    <SwiperSlide>
                        2
                    </SwiperSlide>
                    <SwiperSlide>
                        3
                    </SwiperSlide>
                    <SwiperSlide>
                        4
                    </SwiperSlide>
                    <button className="absolute top-[70%] left-1 lg:left-[-10px] translate-y-[-50%] text-3xl lg:text-3xl text-secondary z-10 arrow-prev"><IoIosArrowDropleftCircle /></button>
                    <button className="absolute top-[70%] right-1 lg:right-[-10px] translate-y-[-50%] text-3xl lg:text-3xl text-secondary z-10 arrow-next"><IoIosArrowDroprightCircle /></button>
                </Swiper>
            </div>
        </div>
    );
}
