import ProductSquareContent from "@/components/contents/ProductSquareContent";

export default async function ProductIndex({data}) {

    
  return (
    <div className="container">
      <div>Filter</div>
      <ProductSquareContent data={data}/>
    </div>
  );
}
