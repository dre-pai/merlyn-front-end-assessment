import { ReactSVG } from 'react-svg'
import './ResultCard.css'

const ResultCard = props => {
    const saveClick = e => {
        const hidden = e.currentTarget.querySelector('.planet-save-hidden')
        const visible = e.currentTarget.querySelector('.planet-save-icon:not(.planet-save-hidden)')

        hidden.classList.remove('planet-save-hidden')
        visible.classList.add('planet-save-hidden')
    }

    return (
        <div className="result-card brand-bg">
            <ReactSVG className="result-planet-icon" src={props.svgPath} />
            <div className="result-planet-info">
                <div className="result-planet-name">
                    <span className="home-title">{props.name}</span>
                    <div onClick={saveClick}>
                        <ReactSVG className="planet-save-icon svg-invert" src='/images/icons/regular/Save.svg' />
                        <ReactSVG className="planet-save-icon planet-save-hidden" src='/images/icons/solid/Saved.svg' />
                    </div>
                </div>
                <div className="result-planet-desc placeholder">{props.desc}</div>
                <div className="result-planet-link">
                    <span>Continue lendo</span>
                    <ReactSVG src='/images/icons/regular/ForwardOrange.svg' />
                </div>
            </div>
        </div>
    )
}

export default ResultCard