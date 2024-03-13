import { getAllProductApi } from "@/app/api/product/route";
import SquareProductCard from '../cards/SquareProductCard';
import TitleType from "../ui/TitleType";

const ProductApiSquare = async ({ sliceLimited, addGridClass, titleText, containerClass }) => {
    const detailData = await getAllProductApi();
    const limited = await detailData.slice(0, sliceLimited);
    return (
        <div className={`w-full lg:mt-20 mt-12 inline-block`}>
            <div className='md:max-w-[600px] lg:max-w-[1200px] m-auto'>
                <TitleType titleType="h2">{titleText}</TitleType>
                <div className={`grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ${addGridClass ?? addGridClass}`}>
                    {
                        sliceLimited ?
                            limited.map((item) => (
                                <SquareProductCard key={item.id} data={item} />
                            ))
                            :
                            detailData.map((item) => (
                                <SquareProductCard key={item.id} data={item} />
                            ))
                    }
                </div>
            </div>
        </div>


    )
}

export default ProductApiSquare