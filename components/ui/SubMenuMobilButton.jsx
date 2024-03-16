'use client';
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SubMenuMobilButton({ children }) {
    const [menuButton, setmenuButton] = useState(false);

    const toggleMenu = () => {
        setmenuButton(!menuButton)
    }

    return (
        <>
            <div className={`${menuButton === true && 'active'} subMenuMobil`}>
            {children}
            </div>
            <button className="block lg:hidden absolute right-1 h-[49px] bg-secondary  text-white px-4 top-0 " onClick={toggleMenu}><IoIosArrowDown  className={`transition-all ${ menuButton && 'rotate-180'}`}/></button>
        </>
    )
}