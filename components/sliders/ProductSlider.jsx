"use client";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import Image from "next/image";
import ButtonType from "../ui/ButtonType";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import TitleType from "../ui/TitleType";


export default function ProductSlider() {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])
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
                    {
                        data?.map((item, index) => (
                            index < 6 &&
                            <div key={item.id} className="mx-5 !w-[200px] sm:!w-[270px]">
                                <div>
                                    <div className='group flex flex-col gap-4 transition-all'>
                                        <div className='p-4 overflow-hidden bg-white rounded-full shadow-[-5px_8px_0px_#9575e5] relative'>
                                            <div className='w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] relative'>
                                                <Image src={item.image} className='object-contain group-hover:scale-125 group-hover:rotate-6 transition-all' fill alt={item.title} />
                                            </div>
                                            {
                                                item.id === 1 ?
                                                    <span className='absolute top-10 right-10 p-2 bg-secondary text-white text-xs rounded-lg'>%10 İndirim</span>
                                                    :
                                                    item.id === 2 ?
                                                        <span className='absolute top-10 right-10 p-2 bg-third text-white text-xs rounded-lg'>Yeni</span>
                                                        :
                                                        <span className='absolute top-10 right-10 p-2 bg-primary text-white text-xs rounded-lg'>Popüler</span>
                                            }
                                        </div>
                                        <div className='w-full text-center flex flex-col gap-2 place-content-center'>
                                            <h3 className='font-primary text-primary min-h-[48px] line-clamp-2'>{item.title}</h3>
                                            <ButtonType buttonType="arrow" url={`/urunler/${item.id}`} title={item.title} >Detay</ButtonType>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}
