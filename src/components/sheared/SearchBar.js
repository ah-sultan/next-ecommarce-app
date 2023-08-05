import { useEffect, useState } from "react"
import { IoMdSearch } from "react-icons/io"
import { useSelector, useDispatch } from "react-redux"
import { storedAllItems, addToSearchedItems } from "@/redux/slice/filterSlice"
import Link from "next/link"

function SearchBar() {
    const [getFilterdItems, setGetFilterdItems] = useState([])
    const [showItems, setShowItem] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")


    const dispatch = useDispatch()


    const storedItems = useSelector(storedAllItems)
    const searchedItems = useSelector((state) => state.filter.searchedItems)

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
        setShowItem(true)
    }

    useEffect(() => {
        const filteredItems = storedItems.filter((items) => items.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))

        document.body.addEventListener('click', () => setShowItem(false))

        if (searchQuery.length === 0 || filteredItems.length === 0) {
            setShowItem(false)
        }

        setGetFilterdItems(filteredItems)

    }, [searchQuery, storedItems, searchedItems, getFilterdItems])


    dispatch(addToSearchedItems(getFilterdItems))

    return (
        <>
            <div className="relative">
                <div className="flex items-center border border-gray-600 rounded-lg p-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full focus:outline-none px-2 py-1 bg-transparent"

                        onChange={handleSearch}
                    />
                    <IoMdSearch className="w-5 h-5 text-gray-500" />
                </div>

                {
                    showItems &&

                    <div className="bg-gray-800 w-[400px] absolute top-full left-0 z-30 shadow-lg p-5 ">
                        <ul>
                            {
                                searchedItems.map((items, index) => {

                                    return (
                                        <li key={index} className="w-full py-3 border-b border-b-gray-900 last:border-none last:pb-0 first:pt-0">
                                            <Link href={{
                                                pathname: '/id',
                                                query: items,
                                            }}>

                                                {items.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                }
            </div>
        </>
    )
}

export default SearchBar