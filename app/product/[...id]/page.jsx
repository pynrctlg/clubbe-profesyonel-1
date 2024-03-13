import { getAllProductApi } from "@/app/api/product/route";
import ProductDetail from "@/components/productItems/ProductDetail"
export default async function ProductPages({ params }) {

    const detailData = await getAllProductApi(params.id)

    return (
        <div>
            <ProductDetail data={detailData} />
        </div>
    )
}
