import React from 'react'
import { ReactSVG } from 'react-svg'
import './CategoryCard.css'

const CategoryCard = props => {
    return (
        <div className={"category-card bg-gradient-" + props.bgGradientColor}>
            <ReactSVG src={props.iconPath} />
            <div className="category placeholder">{props.category}</div>
        </div>
    )
}

export default CategoryCard