// import { getAllProductApi } from "@/app/api/product/route";
import * as contentRepo from "@/services/content";
import CatalogDetail from "@/components/catalog/CatalogDetail"
export default async function CatalogPages({ params }) {

    // const detailData = await getAllProductApi(params.id)
    const detailData = await contentRepo.getData({
        type: 'article',
        slug: params.slug
    });

    return (
        <div>
            <CatalogDetail data={detailData[0]} />
        </div>
    )
}
