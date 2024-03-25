import Headers from "@/components/customers/Headers";
import Filter from "../Filter";

export default async function ProductIndex({ data }) {
  return (
    <div className="container">
      <Headers
        titleText="Ürün listesi"
        paragraphText="En iyi ürünleri burada bulabilirsiniz."
        data={data}
      />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Filter data={data}/>
      </div>
    </div>
  );
}
