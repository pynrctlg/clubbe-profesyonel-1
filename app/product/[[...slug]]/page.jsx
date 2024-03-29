import ProductIndex from "@/components/containers/Product";
import ProductDetail from "@/components/containers/Product/Detail";
import * as contentRepo from "@/services/content";

export default async function Product({ params }) {
    const detailData = await contentRepo.getData({
        type: "product",
        slug: params.slug,
    });
    const data = await contentRepo.getData({
        type: "product"
    });


    return (
        <>
            {
                params.slug ?
                    <ProductDetail data={detailData} />
                    :
                     <ProductIndex data={data} />


            }
        </>

    )
}