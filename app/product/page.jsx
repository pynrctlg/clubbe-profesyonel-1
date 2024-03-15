import ProductApiSquare from "@/components/productItems/ProductApiSquare";
import ProductApiCircle from "@/components/productItems/ProductApiCircle";

export default async function ProductPages() {

    return (
        <div className="container">
            <div>Filter</div>

            {/* <ProductApiCircle titleText="Ürün Liste"/> */}
            <ProductApiSquare titleText="Ürün Liste"/>
            
        </div>
    )
}