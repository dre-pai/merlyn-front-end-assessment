import { ReactSVG } from 'react-svg'
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import './Header.css'

const Header = () => {
    const location = useLocation()

    return (
        <header className="content-row">
            {
                location.pathname === '/'
                    ?
                    <h1 className="home-title">
                        Olá, <span className="bg-gradient-pink gradient-text">Ana Cecília</span>
                        <div className="paragraph">O que você vai aprender hoje?</div>
                    </h1>
                    :
                    <NavLink to="/">
                        <ReactSVG className="svg-invert" src="/images/icons/regular/Back.svg" />
                    </NavLink>
            }
            <ReactSVG className="svg-invert" src="/images/icons/regular/Settings.svg" />
        </header>
    )
}

export default Header