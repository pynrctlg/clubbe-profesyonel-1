import * as contentRepo from "@/services/content";
import ArticleDetail from "@/containers/Article/Detail";
import ArticleIndex from "@/containers/Article";
export default async function Article({ params }) {

    const detailData = await contentRepo.getData({
        type: "article",
        slug: params.slug,
    });
    const data = await contentRepo.getData({
        type: "article"
    });

    return (
        <div>
            {
                params.slug ?
                    <ArticleDetail data={detailData[0]} />
                    :
                    <ArticleIndex data={data} />
            }
        </div>


    )
}
