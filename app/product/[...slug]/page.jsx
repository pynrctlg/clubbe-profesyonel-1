// import { getAllProductApi } from "@/app/api/product/route";
import * as contentRepo from "@/services/content";
import ProductDetail from "@/components/productItems/ProductDetail"
export default async function ProductPages({ params }) {

    // const detailData = await getAllProductApi(params.id)
    const detailData = await contentRepo.getData({
        type: 'product',
        slug: params.slug
    });

    return (
        <div>
            <ProductDetail data={detailData[0]} />
        </div>
    )
}
