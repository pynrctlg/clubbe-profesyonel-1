import Image from "next/image";
import Link from "next/link";
import logoImage from '@/public/logo.png'
export default function Logo(){
    return(
        <Link href="/" className="absolute lg:relative top-4 lg:top-0 inline-block lg:w-[150px] lg:h-[42px] w-[100px] h-[28px] z-30">
                        <Image src={logoImage}
                            priority={true}
                            alt="Clubbe" />
                    </Link>
    )
}