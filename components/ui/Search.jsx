'use client'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import OutsideClickHandler from 'react-outside-click-handler';
import TitleType from "./TitleType";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
export default function Search() {
    const [modal, setModal] = useState(false);


    const searchData = (str) => {
        if (str && str.length > 0) {
            fetch("/api/search?str=" + str, {
                method: 'GET',
            }).then(res => {
                return res.json();
            }).then((data) => {
                console.log(JSON.stringify(data));
            })
        }
    }

    return (
        <>
            <div className="relative flex">
                <button className="h-[38px] bg-third hover:bg-secondary text-white px-3 text-xl" onClick={() => setModal(true)}>
                    <CiSearch /></button>
            </div>

            {
                modal && (
                    <div className="fixed  bg-[rgba(0,0,0,0.6)] inset-0 z-50 flex place-content-center place-items-center">
                        <OutsideClickHandler
                            onOutsideClick={() => setModal(false)}
                        >
                            <div className="w-11/12 m-auto lg:w-[700px] pb-10 lg:pb-0 relative border-[1px] border-solid  border-slate-200 shadow-md bg-white flex justify-center items-center">
                                <button className="absolute z-40 -top-3 -right-3 p-3 text-xl bg-black rounded-full border hover:bg-secondary" onClick={() => setModal(false)}>
                                    <IoClose className="text-white" />
                                </button>
                                <div className="w-full flex min-h-full items-center justify-center flex-col lg:flex-row ">
                                    <div className="bg-[#F2F0FF] w-full">
                                        <div className="relative w-full h-[300px] lg:h-[500px] flex items-center">
                                            <Image src="/search-popup.png" className="object-contain !h-4/5 !top-1/2 !-translate-y-1/2" fill alt="ürün ismi" />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 pt-4 lg:pt-0">
                                        <TitleType titleType="h2" addClass="text-primary !text-xl !text-left !mb-2">Arama</TitleType>
                                        <p className="text-sm mb-4 line-clamp-3 text-secondary">Lütfen arama yapmak istediğiniz ürün ismini veya ürün kodunu giriniz.</p>
                                        <div className="flex justify-center items-center w-full">
                                            <input type="text" className="pl-3 h-[38px] w-full border-[2px] border-r-0 border-solid  border-slate-200"></input>
                                            <button className="h-[38px] bg-third hover:bg-secondary text-white px-3 text-xl">
                                                <CiSearch /></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </OutsideClickHandler>
                    </div>
                )
            }
        </>

    )
}