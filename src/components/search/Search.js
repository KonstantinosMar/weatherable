import { useContext } from 'react'

import './Search.scss'
import Pin from '../../assets/images/Exclude.svg'
import { SearchContext } from '../../contexts/SearchContext'

const Search = () => {
    const { search, setSearch, submitSearch } = useContext(SearchContext)

    return (
        <div className="search-section">
            <form className="search-section--inner" onSubmit={submitSearch}>
                <div className="input-wrapper">
                    <img src={Pin} alt="Pin icon"/>
                    <input type="text" placeholder="Example: New York, United States"
                           onChange={e => setSearch(e.target.value)}
                           value={search}/>
                </div>
                <div className="button-wrapper">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Search