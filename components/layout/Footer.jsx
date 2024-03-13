import Social from "../ui/Social";

export default function Footer() {

    return (
        <div className="bg-secondary py-7">
            <div className="container flex lg:justify-between text-white text-center m-auto flex-col lg:flex-row justify-center px-5 lg:px-0 items-center pb-9 lg:pb-0">
                <span>Clubbe © 2024 Tüm hakları saklıdır</span>
                <Social />
            </div>
        </div>
    )
}
