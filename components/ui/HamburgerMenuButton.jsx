'use client';
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


export function HamburgerMenuButton({ children }) {
    const [menuButton, setmenuButton] = useState(false);

    const toggleMenu = () => {
        setmenuButton(!menuButton)
    }

    return (
        <>
            <div className={`absolute w-full bg-white right-0 top-0 z-10 block lg:hidden mobileButton ${menuButton === true && 'active'}`}>
                <button className="z-20 absolute right-2 top-4 text-3xl block" onClick={toggleMenu}>
                    {menuButton ?
                        <IoClose />
                        :
                        <HiMenuAlt4 />
                    }
                </button>
            </div>
            {

                <div className={`menuItems ${menuButton === true && 'active'}`}>
                    {children}
                </div>
            }
        </>
    )
}