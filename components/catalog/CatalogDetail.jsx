import Image from "next/image";
import { BsCalendarDate } from "react-icons/bs";
export default async function CatalogDetail({ data }) {


    return (
        <div className="w-full">
            <div className="relative h-[500px]">
                <Image src={data.image.large}
                    fill
                    className='object-cover transition-all'
                    priority={true}
                    alt={data.title} />
            </div>
            <div className="container m-auto p-7">
                <h1 className='font-bold text-primary text-3xl lg:text-4xl mb-2 drop-shadow-md text-center lg:my-9 my-5'>{data.title}</h1>
                <span className="text-sm text-fifth flex gap-1 items-center font-secondary"><BsCalendarDate />{data.updated_at?.split('T')[0]}</span>
                <span className="text-sm text-fifth flex gap-1 items-center font-secondary">{data.attributes.author}</span>
                <div>
                    {data.content}
                </div>
            </div>
        </div>
    )
}