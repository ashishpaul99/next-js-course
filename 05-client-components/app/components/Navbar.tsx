import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 flex flex-col md:flex-row justify-between items-center sticky top-0 drop-shadow-xl">
            <h1 className="text-3xl font-bold text-white mb-3 md:mb-0">
                <Link href="/">WikiRocket!</Link>
            </h1>
            <Search />
        </nav>
    )
}