import Link from "next/link";
import { FaPhoneSquareAlt ,FaWhatsapp } from "react-icons/fa";

export default function PhoneWp({addClass}) {
    return (
        <ul className={`${addClass ? addClass : ''} flex gap-5 text-md mx-auto lg:mx-0 my-3`}>
            <li>
                <Link href="tel:+905544444444" className="flex items-center gap-2 font-primary hover:text-third transition-all"><FaPhoneSquareAlt /><span>0554 444 44 44</span></Link>
            </li>
            <li >
                <Link href="https://wa.me/+905544444444" target="_blank" className="flex items-center gap-2 hover:text-third transition-all"><FaWhatsapp /><span>0554 444 44 44</span></Link>
            </li>
        </ul>
    )
}