import Image from 'next/image';
import { FaTurkishLiraSign } from "react-icons/fa6";
import TitleType from '../ui/TitleType';
import ButtonType from '../ui/ButtonType';


const SquareProductCard = ({ item }) => {
    return (

        <div className='w-[270px] group flex flex-col gap-4 shadow-md transition-all bg-white m-auto rounded-md'>
            <div className='p-2 overflow-hidden bg-white relative'>
                <div className='w-full h-[220px] relative'>
                    <Image src={item.image?.thumb} priority className='w-full h-auto object-contain group-hover:scale-125 group-hover:rotate-6 transition-all' width="0"
                        height="0"
                        sizes="100vw" alt={item.title} />
                </div>
                <span className='text-base bg-secondary text-white font-third flex items-center justify-end absolute right-2 bottom-0 py-1 px-3 z-10 rounded-lg'>{item.attributes.price}<FaTurkishLiraSign className='text-xs' />
                </span>
                {
                    item.tags?.includes("is:discount") ?
                        <span className='absolute top-0 right-0 p-2 bg-secondary text-white text-xs'>İndirimli</span>
                        :
                        item.tags?.includes("is:new") ?
                            <span className='absolute top-0 right-0 p-2 bg-third text-white text-xs'>Yeni</span>
                            : item.tags?.includes("is:popular") &&
                            <span className='absolute top-0 right-0 p-2 bg-primary text-white text-xs'>Popüler</span>
                }

            </div>
            <div className='w-full flex gap-2 min-h-[77px] py-3 border-t-[1px] border-solid  border-slate-200 items-center justify-between px-4 pb-4'>
                <TitleType titleType="h3" addClass="!font-primary !text-left font-normal !text-secondary !text-base line-clamp-2">{item.title}</TitleType>
                <ButtonType url={`/urunler/${item.slug}`} addClass="!py-1 !px-3 !text-base h-max" title={item.title}>İncele</ButtonType>
            </div>
        </div>

    )
}

export default SquareProductCard