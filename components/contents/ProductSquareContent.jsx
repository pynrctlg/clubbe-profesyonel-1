import SquareProductCard from '../cards/SquareProductCard';
import TitleType from "../ui/TitleType";
export default async function ProductSquareContent({ sliceLimited, titleText, data, addClass, gridAddClass, selected }) {
    const noLimited = data;
    const limited = data.slice(0, sliceLimited);
    return (

        <div className={`lg:mt-20 mt-12 inline-block lg:pb-20 pb-12 ${addClass ? addClass : 'w-full'}`}>
            <div className='md:max-w-[600px] lg:max-w-[1200px] m-auto'>
                <TitleType titleType="h2">{titleText}</TitleType>
                <div className={`${gridAddClass ? gridAddClass : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} grid gap-x-4 gap-y-10  place-items-center relative`}>
                    {
                        sliceLimited ?
                            limited?.map((item) => (
                                <SquareProductCard key={item.id} item={item} />
                            ))
                            :

                            noLimited?.map((item) => (
                                selected ?
                                    item.attributes.type === selected &&
                                    <SquareProductCard key={item.id} item={item} />
                                    :
                                    <SquareProductCard key={item.id} item={item} />
                            ))
                    }
                </div>
            </div>
        </div>


    )
}
