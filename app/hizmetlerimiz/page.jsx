import Image from "next/image";
import logoImage from '@/public/service-header.jpg';
import Ourinfo from "@/components/customers/Newsletter";
export const metadata = {
    title: "Clubbe | Hizmetlerimiz",
};
export default function Services() {
    return (
        <div className="w-full">
            <div className="relative">
                <Image src={logoImage}
                    priority={true}
                    alt="Clubbe" />
            </div>
            <Ourinfo/>
        </div>
        
    )
}