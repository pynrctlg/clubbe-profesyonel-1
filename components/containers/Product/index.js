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
      <Filter data={data}></Filter>
    </div>
  );
}
