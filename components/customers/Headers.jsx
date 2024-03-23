import Image from "next/image";
import TextType from "../ui/TextType";
import TitleType from "../ui/TitleType";

export default function Headers({ titleText, paragraphText, data }) {
    return (
        <div className="w-full justify-center relative rounded-md flex my-5 items-center min-h-[250px] overflow-hidden before:bg-gradient-to-r before:from-fourth before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-30 before:contents-[''] ">
            <div className="relative z-50 px-12">
                <TitleType titleType="h1" addClass="text-white text-center">{titleText}</TitleType>
                <TextType addClass="!text-white font-secondary">{paragraphText}</TextType>
            </div>
            <Image src={data[1].image?.thumb} fill className="object-cover z-10 blur-md filter " alt={data[1].title} />
        </div>
    )
}