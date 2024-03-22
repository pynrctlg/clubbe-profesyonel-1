import SquareProductCard from '../cards/SquareProductCard';
import TitleType from "../ui/TitleType";
export default async function ProductSquareContent({ sliceLimited, addGridClass, titleText, data }) {
    const noLimited = data;
    const limited = data.slice(0, sliceLimited);
    return (

        <div className={`w-full lg:mt-20 mt-12 inline-block lg:pb-20 pb-12`}>
            <div className='md:max-w-[600px] lg:max-w-[1200px] m-auto'>
                <TitleType titleType="h2">{titleText}</TitleType>
                <div className={`grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center relative ${addGridClass ? addGridClass : ''}`}>
                    {
                        sliceLimited ?
                            limited?.map((item) => (
                                <SquareProductCard key={item.id} item={item} />
                            ))
                            :

                            noLimited.map((item) => (
                                <SquareProductCard key={item.id} item={item} />
                            ))
                    }
                </div>
            </div>
        </div>


    )
}
