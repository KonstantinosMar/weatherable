import {createContext, useState} from 'react'

export const SearchContext = createContext(null)

export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState('')
    const [searchHistory, setSearchHistory] = useState([])

    const submitSearch = (e) => {
        e.preventDefault()
        setSearchHistory((prevSearchHistory) => [...prevSearchHistory, search])
        setSearch('')
    }

    return (
        <SearchContext.Provider value={{search, setSearch, searchHistory, submitSearch}}>
            {children}
        </SearchContext.Provider>
    )
}