import { getAllProductApi } from "@/app/api/product/route";
import ProductApiSquare from "@/components/productItems/ProductApiSquare";

export default async function ProductPages() {

    const detailData = await getAllProductApi()

    return (
        <div className="container">
            {/* <ProductApiCircle data={detailData} titleText="Ürün Liste"/> */}
            
            <div>Filter</div>
            <ProductApiSquare data={detailData} titleText="Ürün Liste"/>
        </div>
    )
}


