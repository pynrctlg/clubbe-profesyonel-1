import { getData } from "@/services/content";
import CircleProductCard from '../cards/CircleProductCard';
import TitleType from "../ui/TitleType";

const ProductApiCircle = async ({ sliceLimited, addGridClass,titleText }) => {
    const detailData = await getData({
        type: 'product'
    });
    const limited =  detailData.slice(0, sliceLimited);
    return (
        <div className="w-full lg:mt-20 mt-12 lg:pb-20 pb-12">
            <div className='max-w-[1200px] m-auto'>
                <TitleType titleType="h2">{titleText}</TitleType>
                <div className={`grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ${addGridClass ? addGridClass:''}`}>
                    {
                        sliceLimited ?
                            limited.map((item) => (
                               <CircleProductCard key={item.id} item={item}/>
                            ))
                            :
                            detailData.map((item) => (
                                <CircleProductCard key={item.id} item={item}/>
                            ))
                    }
                </div>
            </div>
        </div>


    )
}

export default ProductApiCircle