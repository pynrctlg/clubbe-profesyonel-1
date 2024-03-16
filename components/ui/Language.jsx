'use client';
import Link from "next/link";
import { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';

export default function Language() {
    const [modal, setModal] = useState(false);
    const toggleLang = () => {
        setModal(!modal)
    }
    return (
        <ul>
            <li className="relative group">
                <button className="h-[38px] px-4 flex items-center justify-center bg-primary text-white font-third font-normal" onClick={toggleLang}>TR</button>
                {
                    modal &&
                    <OutsideClickHandler
                        onOutsideClick={() => setModal(false)}
                    >
                        <ul className="absolute bottom-[100%] top-auto lg:bottom-auto lg:top-[100%] bg-white w-full left-0 z-40 text-center flex flex-col border-b-gray-200 border-solid border-[1px]">
                            <li className="border-b-gray-200 border-solid border-b-[1px]">
                                <Link href="/" title="En" className="py-2 inline-block hover:bg-primary w-full hover:text-white font-third" onClick={toggleLang}>EN</Link>
                            </li>
                            <li className="border-b-gray-100 border-solid border-b-[1px]">
                                <Link href="/" title="Fr" className="py-2 inline-block hover:bg-primary w-full hover:text-white font-third" onClick={toggleLang}>FR</Link>
                            </li>
                            <li className="border-b-gray-100 border-solid border-b-[1px]">
                                <Link href="/" title="AR" className="py-2 inline-block hover:bg-primary w-full hover:text-white font-third" onClick={toggleLang}>AR</Link>
                            </li>
                        </ul>
                    </OutsideClickHandler>
                }

            </li>
        </ul>
    )
}