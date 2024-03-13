import { CiSearch } from "react-icons/ci";
export default function Search() {
    return (
        <form>
            <div className="relative flex">
                <input type="search" className="px-2 h-[38px] border border-solid border-[#E7E6EF]" />
                <button className="h-[38px] bg-third hover:bg-secondary text-white px-4 text-xl "><CiSearch /></button>
            </div>
        </form>
    )
}