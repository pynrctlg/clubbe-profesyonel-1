import { FcInTransit, FcApproval, FcDonate, FcConferenceCall } from "react-icons/fc";
import TextType from "../ui/TextType";

export default function InformationTape() {

    return (
        <div className="bg-white lg:mt-20 mt-12">
            <div className="max-w-lg lg:max-w-5xl m-auto grid place-items-center grid-cols-1 sm:grid-cols-2 gap-y-10 lg:grid-cols-4 gap-3">
                <div className="flex w-[200px] min-h-[200px] px-4 py-7 place-content-center flex-col gap-1 shadow-md">
                    <div className="text-center">
                        <FcInTransit className="text-5xl m-auto mb-2" />
                        <TextType addClass="text-center line-clamp-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </TextType>
                    </div>
                </div>
                <div className="flex w-[200px] min-h-[200px] px-4 py-7 place-content-center flex-col gap-1 shadow-md">
                    <div className="text-center">
                        <FcApproval className="text-5xl m-auto mb-2" />
                        <TextType addClass="text-center line-clamp-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</TextType>
                    </div>
                </div>
                <div className="flex w-[200px] min-h-[200px] px-4 py-7 place-content-center flex-col gap-1 shadow-md">
                    <div className="text-center">
                        <FcConferenceCall className="text-5xl m-auto mb-2" />
                        <TextType addClass="text-center line-clamp-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</TextType>
                    </div>
                </div>
                <div className="flex w-[200px] min-h-[200px] px-4 py-7 place-content-center flex-col gap-1 shadow-md">
                    <div className="text-center">
                        <FcDonate className="text-5xl m-auto mb-2" />
                        <TextType addClass="text-center line-clamp-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</TextType>
                    </div>
                </div>
            </div>
        </div>

    )
}