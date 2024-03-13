import Image from 'next/image';
import Link from 'next/link';
import { FaTurkishLiraSign } from 'react-icons/fa6';

const CircleProductCard = ({ data }) => {
    return (
        <div>
            <div key={data.id} >
                <Link href={`/urunler/${data.id}`} title={data.title} className='w-[270px] group flex flex-col gap-4 transition-all'>
                    <div className='p-4 overflow-hidden bg-white rounded-full shadow-[-5px_8px_0px_#9575e5] relative'>
                        <div className='w-[220px] h-[220px] relative'>
                            <Image src={data.image} className='object-contain group-hover:scale-125 group-hover:rotate-6 transition-all' fill alt={data.title} />
                        </div>
                        {
                            data.id === 1 ?
                            <span className='absolute top-10 right-10 p-2 bg-secondary text-white text-xs rounded-lg'>%10 İndirim</span>
                            :
                            data.id === 2 ?
                            <span className='absolute top-10 right-10 p-2 bg-third text-white text-xs rounded-lg'>Yeni</span>
                            :
                            <span className='absolute top-10 right-10 p-2 bg-primary text-white text-xs rounded-lg'>Popüler</span>
                        }
                    </div>
                    <div className='w-full text-center flex flex-col gap-2 place-content-center'>
                        <h3 className='font-primary text-primary min-h-[48px]'>{data.title}</h3>
                        <div className='flex justify-center gap-4'>
                            <span className='flex items-center text-sm'>{data.price} <FaTurkishLiraSign className='text-xs' /></span>
                            <span className='flex items-center text-sm text-gray-400 line-through'>100 <FaTurkishLiraSign className='text-xs' /></span>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CircleProductCard