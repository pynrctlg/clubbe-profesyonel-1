import Image from "next/image";
import ButtonType from "../ui/ButtonType";
import TitleType from "../ui/TitleType";

export default function Newsletter() {
    return (
        <div className="w-full h-[400px] flex items-center relative justify-center text-center">
            <Image src="/newslatter-bg.jpg" className="object-cover" fill alt="Get Leatest Update By Subscribe"/>
            <div className="container relative">
                <TitleType titleType="h2">
                   Ürünler Hakkında Detaylı Bilgi Almak İçin<br></br>
                   Abone Olmayı Unutmayın
                </TitleType>
                <ButtonType url="/iletisim">Abone Ol</ButtonType>
            </div>
        </div>
    )
}