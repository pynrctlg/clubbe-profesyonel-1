import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function ButtonType({ buttonType, children, url, addClass,title }) {
    return (
        <>
            {

                buttonType === 'arrow' ?
                    <Link href={url} title={title} className={`cta2 ${addClass ? addClass : ''}`}>{children}<IoIosArrowRoundForward className='group-hover:translate-x-4 transition-all' /></Link>
                    :
                    buttonType === 'border' ?
                        <Link href={url} title={title} className={`text-fourth text-base h-max flex gap-1 items-center border-solid border border-fourth max-w-max py-2 px-4 rounded-lg hover:bg-fourth hover:text-white ${addClass ? addClass : ''}`}>{children}<IoIosArrowRoundForward className='group-hover:translate-x-4 transition-all' /></Link>
                        :
                        <Link href={url} title={title} className={`cta ${addClass ? addClass : ''}`}> {children}</Link>
            }
        </>
    )
}