'use client'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import OutsideClickHandler from 'react-outside-click-handler';
import TitleType from "./TitleType";
import { IoClose } from "react-icons/io5";
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
                    <div className=" fixed bg-[rgba(126,51,224,.7)] inset-0 z-50 flex place-content-center place-items-center">
                        <OutsideClickHandler
                            onOutsideClick={() => setModal(false)}
                        >
                            <div className="w-[300px] lg:w-[600px] h-[200px] lg:h-[250px] relative border-[1px] border-solid  border-slate-200 shadow-md bg-white flex justify-center items-center">
                                <button className="absolute -top-3 -right-3 p-3 text-xl bg-white rounded-full border border-slate-200 border-solid" onClick={() => setModal(false)}>
                                    <IoClose />
                                </button>
                                <div className="w-full">
                                    <TitleType titleType="h2" addClass="text-primary !mb-2">Arama</TitleType>
                                    <div className="flex justify-center items-center">
                                        <input type="text" className="pl-2 h-[38px] w-2/3 border-[2px] border-r-0 border-solid  border-slate-200"></input>
                                        <button className="h-[38px] bg-third hover:bg-secondary text-white px-3 text-xl">
                                            <CiSearch /></button>
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