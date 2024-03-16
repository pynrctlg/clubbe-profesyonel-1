"use client";
import Slider from "react-slick";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import TitleType from "../ui/TitleType";
import ProductSliderCard from "../cards/ProductSliderCard";


export default function ProductSlider() {

    function NextBtn({ onClick }) {
        return (
            <button
                onClick={onClick}
                className="absolute top-[70%] right-1 lg:right-[-10px] translate-y-[-50%] text-3xl lg:text-3xl text-secondary z-10"
            >
                <IoIosArrowDroprightCircle />
            </button>
        );
    }

    function PrevBtn({ onClick }) {
        return (
            <button
                onClick={onClick}
                className="absolute top-[70%] left-1 lg:left-[-10px] translate-y-[-50%] text-3xl lg:text-3xl text-secondary z-10"
            >
                <IoIosArrowDropleftCircle />
            </button>
        );
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        swipe: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    };
    return (
        <div className="bg-[#F2F0FF] lg:mt-20 mt-12 py-14">
            <div className="container productSlider">
                <TitleType titleType="h2" addClass="mb-10">Trend Ürünler</TitleType>
                <Slider {...settings} className="relative pb-16">
                    <ProductSliderCard />
                </Slider>
            </div>
        </div>
    );
}
