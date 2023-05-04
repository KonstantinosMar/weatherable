import './Grid.scss'
import Item from "../item/Item"
import { useContext, useMemo } from 'react'
import { SearchContext } from '../../contexts/SearchContext'

const Grid = () => {
    const { searchHistory } = useContext(SearchContext)

    const itemElements = useMemo(() => (
        searchHistory.length ? (
            searchHistory.map((search, index) => (
                <Item key={index} city={search} />
            ))
        ) : (
            <div className="no-data">
                <h3>No data yet</h3>
                <p>Please type in a city above.</p>
            </div>
        )
    ), [searchHistory])

    return (
        <div className={`grid-section ${searchHistory.length ? 'grid-style' : ''}`} >
            {itemElements}
        </div>
    )
}

export default Grid
