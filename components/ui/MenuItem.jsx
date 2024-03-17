
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import ButtonType from "./ButtonType";
import { MenuTree } from "@/services/MenuTree";
import SubMenuMobilButton from "./SubMenuMobilButton";

export default async function MenuItem() {
    const detailData = await MenuTree();
    return (
        <div className="w-full lg:w-auto">
            <ul className="text-secondary text-left w-full lg:w-auto flex menuTree gap-2 pb-10 lg:pb-0 lg:gap-10 text-sm font-bold mr-0 flex-col lg:flex-row lg:mr-6">
                {
                    detailData.map(items => (
                        <li key={items.id} {...items} className="text-base relative lg:static font-medium px-2 lg:px-0 py-3 lg:py-6 group text-left border-b-[1px] lg:border-none border-solid border-slate-200">
                            {
                                items.children !== false ?
                                    (
                                        <SubMenuMobilButton menuHide="toggleMenu">
                                            <Link href={`/${items.link}`} className="hover:text-primary inline-block lg:flex items-center gap-2">{items.name}<IoIosArrowDown className="mt-1 hidden lg:block" /></Link>
                                            <div className="w-full relative lg:absolute top-0 mt-5 lg:mt-0 lg:top-[100%] left-0 bg-slate-50 lg:group-hover:block z-50 shadow-md subMenuContent">
                                                <div className="container p-3 lg:px-10 lg:py-7">
                                                    <div className="flex justify-between">
                                                        <ul>
                                                            <li><h2 className="font-third text-xl lg:text-2xl">KATAGORİLER</h2></li>
                                                            {items.children.map(subitems => (
                                                                <li key={`${items.id}-${subitems.id}`} className="w-full inline-block pb-2 lg:py-2">
                                                                    <Link href={`/${items.link}/${subitems.link}`} className="hover:text-primary text-sm leading-4">{subitems.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="relative hidden lg:block py-4 px-5 bg-white border-slate-200 border-[2px] border-solid rounded-md">
                                                            <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="object-contain" width={200} height={200} alt="ürün ismi" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full text-center mt-6 hidden lg:block">
                                                        <ButtonType url="/product" title="Ürünler" >Tüm Ürünler</ButtonType>
                                                    </div>
                                                </div>
                                            </div>
                                        </SubMenuMobilButton>
                                    )
                                    :
                                    (
                                        <Link href={`${items.link}`} className="hover:text-primary transition-all">{items.name}</Link>
                                    )

                            }

                        </li>
                    ))
                }
            </ul >
        </div>

    )
}
