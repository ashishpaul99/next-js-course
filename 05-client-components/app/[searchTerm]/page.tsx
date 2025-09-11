import getWikiResults from "@/lib/getWikiResults"
import Item from "./components/Item"

type Props = {
  params: Promise<{
    searchTerm: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { searchTerm } = await params
  const data = await getWikiResults(searchTerm)
  const displayTerm = searchTerm.replaceAll('%20', ' ')

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`
    }
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`
  }
}

export default async function SearchResults({ params }: Props) {
  const { searchTerm } = await params
  const data = await getWikiResults(searchTerm)
  const results: Result[] | undefined = data?.query?.pages

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results
        ? Object.values(results).map(result => (
            <Item key={result.pageid} result={result} />
          ))
        : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      }
    </main>
  )
}
