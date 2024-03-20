import { MenuTree } from "@/services/MenuTree";
import Logo from "../ui/Logo";
import Social from "../ui/Social";
import TitleType from "../ui/TitleType";
import Link from "next/link";
import PhoneWp from "../ui/PhoneWp";
import Address from "../ui/Address";

export default async function Footer() {
    const detailData = await MenuTree();
    return (
        <div className="bg-sixth py-7">
            <div className="container flex flex-col lg:flex-row py-2 gap-9 justify-between">
                <div className="p-4 h-max max-w-full lg:max-w-[180px] text-center lg:text-left">
                    <Logo addClass="!relative !w-[150px]" />
                </div>
                <div className="flex flex-col lg:flex-row text-secondary gap-5 ">

                    {
                        detailData.map((item) => (
                            <div key={item.id}>
                                {
                                    item.children ?
                                        <div className="lg:text-left text-center">
                                            <Link href={`/${item.link}`} className="font-extrabold mb-4 inline-block text-lg" title={item.name}>{item.name}</Link>
                                            <ul className="text-left">
                                                {
                                                    item.children.map((subItem) => (
                                                        <li key={subItem.id - item.id} className="my-2 lg:text-left text-center !text-base">
                                                            <Link href={`${item.link}/${subItem.link}`} title={subItem.name}>{subItem.name}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        :
                                        <div className="lg:text-left text-center">
                                            <Link href={`/${item.link}`} className="font-extrabold mb-4 inline-block text-lg" title={item.name}>{item.name}</Link>
                                        </div>
                                }

                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-2">

                    <Social addClass="!text-secondary" />
                    <PhoneWp addClass="!flex-row justify-center !text-secondary" />
                    <Address addClass="!text-secondary" />
                    
                </div>
            </div>
            <div className="container text-secondary text-center lg:text-left">
                <span>Clubbe © 2024 Tüm hakları saklıdır</span>
            </div>
        </div>
    )
}
