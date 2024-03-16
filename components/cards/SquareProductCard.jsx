import Image from 'next/image';
import { FaTurkishLiraSign } from "react-icons/fa6";
import TitleType from '../ui/TitleType';
import ButtonType from '../ui/ButtonType';

const SquareProductCard = ({ data }) => {
    return (
        <div>
            <div key={data.id} >
                <div className='w-[270px] group flex flex-col gap-4 shadow-md transition-all'>
                    <div className='p-2 overflow-hidden bg-white relative'>
                        <div className='w-full h-[220px] relative'>
                            <Image src={data.image?.large} className='object-contain group-hover:scale-125 group-hover:rotate-6 transition-all' fill alt={data.title} />
                        </div>
                        <span className='text-base bg-secondary text-white font-third flex items-center justify-end absolute right-2 bottom-0 py-1 px-3 z-10 rounded-lg'>{data.attributes.price}<FaTurkishLiraSign className='text-xs' />
                        </span>
                        {
                            data.tags?.includes("is:discount") ?
                                <span className='absolute top-0 right-0 p-2 bg-secondary text-white text-xs'>İndirimde</span>
                                :
                                data.tags?.includes("is:new") ?
                                    <span className='absolute top-0 right-0 p-2 bg-third text-white text-xs'>Yeni</span>
                                    : data.tags?.includes("is:popular") &&
                                    <span className='absolute top-0 right-0 p-2 bg-primary text-white text-xs'>Popüler</span>
                        }

                    </div>
                    <div className='w-full flex gap-2 min-h-[77px] py-3 border-t-[1px] border-solid  border-slate-200 items-center justify-between px-4 pb-4'>
                        <TitleType titleType="h3" addClass="!font-primary !text-left font-normal !text-secondary !text-base line-clamp-2">{data.title}</TitleType>
                        <ButtonType url={`/urunler/${data.slug}`} addClass="!py-1 !px-3 !text-base h-max" title={data.title}>İncele</ButtonType>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SquareProductCard