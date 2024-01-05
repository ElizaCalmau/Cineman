import { Categories } from '../../components/Categories/Categories'
import { Title } from '../../components/Title/Title'
import './Hero.css'

export const Hero = () => {
    return (
        <div className="heroBackground">
            <Title/>
            <Categories/>
        </div>
    )
}