import TitleType from "@/components/ui/TitleType";
import Link from "next/link";
import { BsInfoCircleFill } from "react-icons/bs"

export default function NotFound() {
  return (
    <div className="h-[calc(100ch_-_400px)] min-h-[500px] items-center justify-center flex ">
      <div className="text-center flex flex-col gap-3 justify-center">
        <BsInfoCircleFill  className="text-6xl mx-auto mb-3 text-secondary" />
        <TitleType titleType="h1" addClass="font-third">
          Sayfa bulunamadı
        </TitleType>
        <p className="font-secondary text-xl">
          Lütfen{" "}
          <Link href="/" title="ana sayfamızı" className="text-secondary underline">
            ana sayfamızı
          </Link>{" "}
          ziyaret edebilirsiniz.
        </p>
      </div>
    </div>
  );
}
