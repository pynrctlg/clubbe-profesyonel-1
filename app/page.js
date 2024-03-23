import HomeContainer from "@/components/containers/Home";
import * as contentRepo from "@/services/content";

const data = await contentRepo.getData({
  type: "product",
});
export default function Home() {


  return <HomeContainer data={data}/>;
}
