import React from 'react'
import { ReactSVG } from 'react-svg'
import './PlanetCard.css'

const PlanetCard = props => {
    return (
        <div className="planet-card brand-bg">
            <ReactSVG className="planet-icon" src={props.svgPath} />
            <div className="planet-link-wrap">
                <div className="category button-title">{props.name}</div>
                <ReactSVG src="/images/icons/regular/ForwardOrange.svg" />
            </div>
        </div>
    )
}

export default PlanetCard