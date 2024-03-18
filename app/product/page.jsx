import ProductApiSquare from "@/components/products/ProductApiSquare";
import ProductApiCircle from "@/components/products/ProductApiCircle";

export default async function ProductsPage() {

    return (
        <div className="container">
            <div>Filter</div>

            {/* <ProductApiCircle titleText="Ürün Liste"/> */}
            <ProductApiSquare titleText="Ürün Liste"/>
            
        </div>
    )
}