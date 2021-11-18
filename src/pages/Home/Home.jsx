import CategoryCard from '../../components/CategoryCard/CategoryCard'
import PlanetCard from '../../components/PlanetCard/PlanetCard'
import Planets from '../../data/Planets'
import { Scrollbars } from 'react-custom-scrollbars';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="content-row">
                <h2 className="section-label">Categorias</h2>
                <div id="category-card-wrap">
                    <CategoryCard category="Planetas" iconPath="/images/icons/solid/Planets.svg" bgGradientColor="blue" />
                    <CategoryCard category="Asteróides" iconPath="/images/icons/solid/Asteroids.svg" bgGradientColor="pink" />
                    <CategoryCard category="Estrelas" iconPath="/images/icons/solid/Stars.svg" bgGradientColor="cyan" />
                    <CategoryCard category="Galáxias" iconPath="/images/icons/solid/Galaxies.svg" bgGradientColor="yellow" />
                </div>
            </div>
            <div className="content-row">
                <h2 className="section-label">Planetas</h2>
                <Scrollbars className="scroll-wrap" autoHide autoHeight>
                    <div id="planet-card-wrap">
                        {Planets.map((planet, i) => <PlanetCard key={i} svgPath={planet.svgPath} name={planet.name} />)}
                    </div>
                </Scrollbars>
            </div>
        </div>
    )
}

export default Home