import { ReactSVG } from 'react-svg'
import './SearchBar.css'

const SearchBar = ({ updateSearchVal, searchVal }) => {
    const handleChange = e => updateSearchVal(e.target.value)

    return (
        <div id="search-container" className="content-row">
            <ReactSVG id="search-icon" className="svg-invert brand-bg" src="/images/icons/regular/Search.svg" />
            <input value={searchVal} onChange={handleChange} className="brand-bg placeholder" id="search" placeholder="Procure planetas, asteroides, estrelas..." />
        </div>
    )
}

export default SearchBar