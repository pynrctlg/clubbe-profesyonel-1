'use client';
import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


export function MenuButton() {
    const [menuButton, setmenuButton] = useState(false);

    const toggleMenu = () => {
        setmenuButton(!menuButton)
    }

    return (
        <div className={`absolute right-[20px] block lg:hidden mobileButton ${menuButton === false && 'active'}`}>
            <button onClick={toggleMenu}>
                {isOpen ?
                    <HiMenuAlt4 />
                    :
                    <IoClose />
                }
            </button>
        </div>


    )
}