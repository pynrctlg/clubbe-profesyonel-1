
import Logo from "../ui/Logo";
import Social from "../ui/Social";
import PhoneWp from "../ui/PhoneWp";
import Search from "../ui/Search";
import Language from "../ui/Language";
import MenuItem from "../ui/MenuItem";


export default function Header() {
    return (
        <div className="fixed left-0 top-0  z-30 w-full">
            <div className="bg-fourth hidden lg:block">
                <div className="container text-white justify-between items-center hidden lg:flex">
                    <PhoneWp />
                    <Social />
                </div>
            </div>
            <div className="relative bg-white border-b-gray-200 border-solid border-[1px]">
                <div className="container flex justify-between items-center">
                    <div className="flex place-items-center gap-14 py-4 lg:py-0">
                        <Logo />
                        <MenuItem/>
                    </div>
                    <div className="gap-2 hidden lg:flex">
                        <Search />
                        <Language />
                    </div>
                </div>
            </div>
        </div>

    )
}
