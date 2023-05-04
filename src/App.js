import './app.scss'

import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Search from "./components/search/Search"
import Grid from "./components/grid/Grid"
import Footer from "./components/footer/Footer";

import { SearchProvider } from './contexts/SearchContext'

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <SearchProvider>
                <Search/>
                <Grid/>
            </SearchProvider>
            <Footer />
        </div>
    )
}

export default App