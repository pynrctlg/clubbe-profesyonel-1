import Link from "next/link";

export default function Language() {
    return (
        <ul>
            <li className="relative group">
                <span className="h-[38px] px-4 flex items-center justify-center bg-primary text-white font-third font-normal">TR</span>
                <ul className="absolute top-[100%] bg-white w-full left-0 text-center flex flex-col group-hover:visible invisible border-b-gray-200 border-solid border-[1px]">
                    <li className="border-b-gray-200 border-solid border-b-[1px]">
                        <Link href="/" title="En" className="py-2 inline-block hover:bg-primary w-full hover:text-white font-third">EN</Link>
                    </li>
                    <li className="border-b-gray-100 border-solid border-b-[1px]">
                        <Link href="/" title="Fr" className="py-2 inline-block hover:bg-primary w-full hover:text-white font-third">FR</Link>
                    </li>
                    <li className="border-b-gray-100 border-solid border-b-[1px]">
                        <Link href="/" title="AR" className="py-2 inline-block hover:bg-primary w-full hover:text-white font-third">AR</Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}