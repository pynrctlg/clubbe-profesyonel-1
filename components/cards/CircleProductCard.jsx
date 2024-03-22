import Image from 'next/image';
import Link from 'next/link';
import { FaTurkishLiraSign } from 'react-icons/fa6';
const CircleProductCard = ({ item }) => {
    return (
        <Link href={`/urunler/${item.slug}`} title={item.title} className='w-[270px] group flex flex-col gap-4 transition-all m-auto'>
        <div className='p-4 overflow-hidden bg-white rounded-full shadow-[-5px_8px_0px_#9575e5] relative'>
            <div className='w-[220px] h-[220px] relative'>
                <Image src={item.image?.thumb} className='object-contain group-hover:scale-125 group-hover:rotate-6 transition-all' fill alt={item.title} />
            </div>
            {
                item.tags?.includes("is:discount") ?
                    <span className='absolute top-10 right-10 p-2 bg-secondary text-white text-xs rounded-lg'>İndirimli</span>
                    :
                    item.tags?.includes("is:new") ?
                        <span className='absolute top-10 right-10 p-2 bg-third text-white text-xs rounded-lg'>Yeni</span>
                        : item.tags?.includes("is:popular") &&
                        <span className='absolute top-10 right-10 p-2 bg-primary text-white text-xs rounded-lg'>Popüler</span>
            }
        </div>
        <div className='w-full text-center flex flex-col gap-2 place-content-center'>
            <h3 className='font-primary text-primary line-clamp-2'>{item.title}</h3>
            <div className='flex justify-center gap-4'>
                <span className='flex items-center text-sm'>{item.attributes.price} <FaTurkishLiraSign className='text-xs' /></span>
                <span className='flex items-center text-sm text-gray-400 line-through'>{item.attributes.without_discount} <FaTurkishLiraSign className='text-xs' /></span>
            </div>

        </div>
    </Link>
    )
}

export default CircleProductCard