'use client';
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitterSquare, FaLinkedin, FaPinterest } from "react-icons/fa";

export default function Social({addClass}) {
    const socialList = [
        {
            "id": "1",
            "name": "Facebook social",
            "link": "https://www.facebook.com/",
            "icon": <FaFacebook />
        },
        {
            "id": "2",
            "name": "Instagram social",
            "link": "https://www.instagram.com/",
            "icon": <FaInstagram />
        },
        {
            "id": "3",
            "name": "Youtube social",
            "link": "https://www.youtube.com/",
            "icon": <FaYoutube />
        },
        {
            "id": "4",
            "name": "Twitter social",
            "link": "https://twitter.com/",
            "icon": <FaTwitterSquare />
        },
        {
            "id": "5",
            "name": "Linkedin social",
            "link": "https://www.linkedin.com/",
            "icon": <FaLinkedin />
        },
        {
            "id": "6",
            "name": "Pinterest social",
            "link": "https://tr.pinterest.com/",
            "icon": <FaPinterest />
        },
    ]

    return (
        <ul className="flex gap-5 text-2xl mx-auto lg:mx-0 my-3 justify-center">
            {
                socialList.map((items) => (
                    <li key={items.id}>
                        <Link href={items.link} target="_blank" className={`${addClass ? addClass : ''} hover:text-third transition-all`}>{items.icon}</Link>
                    </li>
                ))
            }
        </ul>
    )
}