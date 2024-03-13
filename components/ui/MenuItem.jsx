
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import ButtonType from "./ButtonType";
import { MenuTree } from "@/app/api/menu/route";

export default async function MenuItem() {

    const detailData  = await MenuTree()
    return (
        <div>
            <ul className="text-secondary hidden lg:flex gap-10 text-sm font-bold mr-0 flex-col lg:flex-row text-center lg:text-left lg:mr-6">
                {
                    detailData.map(items => (
                        <li key={items.id} {...items} className="text-base font-medium py-6 group">
                            {
                                items.children !== false ?
                                    (
                                        <div>
                                            <Link href={`/${items.link}`} replace={true} className="hover:text-primary  flex items-center gap-2">{items.name}<IoIosArrowDown className="mt-1" /></Link>
                                            <div className="w-full absolute top-[100%] left-0 bg-slate-50  group-hover:visible invisible z-50 shadow-md">
                                                <div className="container px-10 py-7">
                                                    <div className="flex justify-between">
                                                        <ul>
                                                            <li><h2 className="font-third text-2xl">KATAGORİLER</h2></li>
                                                            {items.children.map(subitems => (
                                                                <li key={`${items.id}-${subitems.id}`} className="w-full inline-block py-2">
                                                                    <Link href={`/${items.link}/${subitems.link}`} className="hover:text-primary">{subitems.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="relative py-4 px-5 bg-white border-slate-200 border-[2px] border-solid rounded-md">
                                                            <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="object-contain" width={200} height={200} alt="ürün ismi" />
                                                        </div>
                                                    </div>
                                                    <div className="w-full text-center mt-6">
                                                        <ButtonType url="/product" title="Ürünler" >Tüm Ürünler</ButtonType>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
