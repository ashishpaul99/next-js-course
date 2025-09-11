'use client'

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
    // State for search input (default empty string)
    const [search, setSearch] = useState('')

    // Next.js router
    const router = useRouter()

      // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault() // prevent page reload
        if (search.trim() === '') return // block empty search
        setSearch('') // clear input after submit
        router.push(`/${search}/`) // navigate to search results page
    }

    return (
        <form className="flex w-full md:w-auto justify-center" onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white p-2 w-60 text-xl rounded-l focus:outline-none"
                placeholder="Search"
            />
            <button className="p-2 text-xl rounded-r bg-slate-300 font-bold hover:bg-slate-200">
                🚀
            </button>
        </form>
    )
}