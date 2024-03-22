import * as contentRepo from "@/services/content";
import Image from "next/image";
import TitleType from "../ui/TitleType";
import ButtonType from "../ui/ButtonType";
import { BsCalendarDate } from "react-icons/bs";


export default async function ArticleCard() {
    const detailData = await contentRepo.getData({
        type: 'article'
    });
    const data = detailData.slice(0, 4);

    return (
        <>
            {
                data.map((item) => (
                    <div key={item.id} className='flex flex-col shadow-md transition-all w-full pb-2 rounded-lg overflow-hidden'>
                        <div className='overflow-hidden bg-white relative'>
                            <div className='h-[220px] relative'>
                                <Image src={item.image?.thumb} className='object-cover transition-all' fill alt={item.title} />
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-2 border-t-[1px] min-h-[77px] py-3 border-solid  border-slate-200 place-content-start px-4 pb-4'>
                            <span className="text-sm text-fifth flex gap-1 items-center font-secondary"><BsCalendarDate />{item.updated_at?.split('T')[0]}</span>
                            <TitleType titleType="h3" addClass="!font-secondary !text-left font-bold !text-primary !text-base line-clamp-2 min-h-[48px]">{item.title}</TitleType>
                            <p className="line-clamp-2 text-fifth">{item.description}</p>
                            <ButtonType buttonType="border" url={`/makale/${item.slug}`} addClass="mt-2" title={item.title}>İncele</ButtonType>
                        </div>
                    </div>
                ))
            }
        </>
    )
}