import * as contentRepo from "@/services/content";
import Image from "next/image";
import ButtonType from "../ui/ButtonType";


export default async function ProductSliderCard() {
    const detailData = await contentRepo.getData({
        type: 'product'
    });
    const limited = detailData.slice(0, 6);
    return (
        <>
            {
                limited?.map((item) => (
                    <div key={item.id} className="mx-5 !w-[200px] sm:!w-[270px]">
                        <div>
                            <div className='group flex flex-col gap-4 transition-all'>
                                <div className='p-4 overflow-hidden bg-white rounded-full shadow-[-5px_8px_0px_#9575e5] relative'>
                                    <div className='w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] relative'>
                                        <Image src={item.image?.thumb} className='object-contain group-hover:scale-125 group-hover:rotate-6 transition-all' fill alt={item.title} />
                                    </div>
                                    {
                                        item.id === 1 ?
                                            <span className='absolute top-10 right-10 p-2 bg-secondary text-white text-xs rounded-lg'>%10 İndirim</span>
                                            :
                                            item.id === 2 ?
                                                <span className='absolute top-10 right-10 p-2 bg-third text-white text-xs rounded-lg'>Yeni</span>
                                                :
                                                <span className='absolute top-10 right-10 p-2 bg-primary text-white text-xs rounded-lg'>Popüler</span>
                                    }
                                </div>
                                <div className='w-full text-center flex flex-col gap-2 place-content-center'>
                                    <h3 className='font-primary text-primary min-h-[48px] line-clamp-2'>{item.title}</h3>
                                    <ButtonType buttonType="arrow" url={`/urunler/${item.id}`} title={item.title} >Detay</ButtonType>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}