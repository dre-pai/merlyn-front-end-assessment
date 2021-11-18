import Planets from '../../data/Planets'
import ResultCard from '../../components/ResultCard/ResultCard'
import './Search.css'

const Search = ({ searchVal }) => {
    const getSearchResults = () => {
        const results = []

        for (let planet of Planets) {
            if (planet.name.toLowerCase().includes(searchVal.toLowerCase()) ||
                planet.desc.toLowerCase().includes(searchVal.toLowerCase()))
                results.push(planet)
        }

        return results
    }

    const searchResults = getSearchResults()

    return (
        <div id="search-results">
            {
                searchResults.length === 0
                    ? "No results found..."
                    : searchResults.map((planet, i) => <ResultCard key={i} name={planet.name} desc={planet.desc} svgPath={planet.svgPath} />)
            }
        </div>
    )
}

export default Search