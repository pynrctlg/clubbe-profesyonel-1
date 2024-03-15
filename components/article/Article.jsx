import CatalogCard from "../cards/ArticleCard";
import TitleType from "../ui/TitleType";

export default function Article({titleText}) {
    return (
        <div className="w-full lg:mt-20 mt-12">
            <div className='container'>
                <TitleType titleType="h2">{titleText}</TitleType>
                <div className={`grid gap-x-10 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center place-content-center`}>
                    <CatalogCard />
                </div>
            </div>
        </div>
    )
}