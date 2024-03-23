
import Logo from "../ui/Logo";
import Social from "../ui/Social";
import PhoneWp from "../ui/PhoneWp";
import Search from "../ui/Search";
import Language from "../ui/Language";
import MenuItem from "../ui/MenuItem";
import { HamburgerMenuButton } from "../ui/HamburgerMenuButton";


export default function Header() {
    return (
        <div className="fixed left-0 top-0 z-[99] w-full bg-white h-[62px] lg:h-auto drop-shadow-md lg:drop-shadow-none">
            <div className="block lg:hidden ml-3">
                <Logo />
            </div>
            <HamburgerMenuButton>
                <div className="bg-fourth phoneSocial absolute bottom-0 left-0 lg:static lg:bottom-auto lg:left-auto z-10 w-full">
                    <div className="container flex text-white justify-between items-center">
                        <PhoneWp addClass="hidden lg:flex" />
                        <Social />
                    </div>
                </div>
                <div className="relative bg-white border-b-gray-200 border-solid border-[1px] menuItemSearch">
                    <div className="lg:container m-auto max-w-full flex-col lg:flex-row overflow-auto h-[calc(100vh_-_115px)] lg:h-auto lg:overflow-visible flex justify-between items-center pr-0 pl-0 lg:pr-[1rem] lg:pl-[1rem]">
                        <div className="flex place-items-center gap-14 w-full lg:w-auto">
                            <div className="hidden lg:block w-full lg:w-auto text-left">
                                <Logo />
                            </div>
                            <MenuItem/>
                        </div>
                        <div className="gap-2 flex absolute bottom-2 lg:bottom-auto w-full pr-2 lg:pr-0 lg:w-auto left-0 lg:left-auto lg:relative justify-end">
                            <Search />
                            <Language />
                        </div>
                    </div>
                </div>
            </HamburgerMenuButton>
        </div>

    )
}
