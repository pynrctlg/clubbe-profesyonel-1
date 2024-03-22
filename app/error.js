"use client"; // Error components must be Client Components

import TitleType from "@/components/ui/TitleType";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-[calc(100ch_-_400px)] min-h-[500px] items-center justify-center flex ">
      <div className="text-center flex flex-col gap-3 justify-center">
        <TitleType titleType="h1" addClass="font-third">
          Sayfa bulunamadı
        </TitleType>
        <p className="font-secondary text-xl">
          {error}
          <Link
            href="/"
            title="ana sayfamızı"
            className="text-secondary underline"
          >
            ana sayfamızı
          </Link>{" "}
          ziyaret edebilirsiniz.
        </p>
      </div>
    </div>
  );
}
