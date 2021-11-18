import React from 'react'
import { ReactSVG } from 'react-svg'
import './BottomBar.css'
import { NavLink } from "react-router-dom"

const BottomBar = () => {
    return (
        <footer className="brand-bg">
            <div id="footer-container">
                <NavLink to="/" className="bottombar-item">
                    <ReactSVG className="svg-invert" src="/images/icons/regular/Home.svg" />
                    <div className="bottombar-text">Início</div>
                </NavLink>
                <NavLink to="/search" className="bottombar-item">
                    <ReactSVG className="svg-invert" src="/images/icons/regular/Search.svg" />
                    <div className="bottombar-text">Buscar</div>
                </NavLink>
                <NavLink to="/saved" className="bottombar-item">
                    <ReactSVG className="svg-invert" src="/images/icons/regular/Save.svg" />
                    <div className="bottombar-text">Salvado</div>
                </NavLink>
                <NavLink to="/gallery" className="bottombar-item">
                    <ReactSVG className="svg-invert" src="/images/icons/regular/Gallery.svg" />
                    <div className="bottombar-text">Galería</div>
                </NavLink>
            </div>
        </footer>
    )
}

export default BottomBar