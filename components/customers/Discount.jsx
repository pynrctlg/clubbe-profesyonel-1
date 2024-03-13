import Image from "next/image";
import TitleType from "../ui/TitleType";
import ButtonType from "../ui/ButtonType";

export default function Discount() {
    return (
        <div className="w-full bg-sixth lg:mt-20 mt-12 py-12">
            <div className="container relative grid grid-cols-1 gap-7 lg:grid-cols-2 justify-center items-center min-h-[400px]">
                <div className="relative min-h-[300px] lg:min-h-full lg:mb-0">
                    <Image src="/s1.png" className="object-contain" fill alt="Get Leatest Update By Subscribe" />
                </div>
                <div className="text-left max-w-full lg:max-w-[500px] flex flex-col gap-3">
                    <TitleType titleType="h3" addClass="!text-center lg:!text-left !text-primary">
                       Haftanın Ürünü Fırsatı Kaçırma
                    </TitleType>
                    <p className="text-fifth text-center lg:text-left">great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</p>
                    <ButtonType url="/iletisim" addClass="m-auto lg:ml-0">İncele</ButtonType>
                </div>
            </div>
        </div>
    )
}