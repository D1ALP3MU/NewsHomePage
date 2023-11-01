import { Article } from "./Article"
import imageUno from '../assets/images/image-retro-pcs.jpg'
import imageDos from '../assets/images/image-top-laptops.jpg'
import imageTres from '../assets/images/image-gaming-growth.jpg'


export const ArticlesContainer = () => {
    return (
        <section className="mt-6 md:flex md:flex-wrap md:gap-10">
            <Article 
                img={imageUno}
                number='01'
                title='Reviving Retro PCs'
                text='What happens when old PCs are given modern upgrades?'
            />
            <Article 
                img={imageDos}
                number='02'
                title='Top 10 Laptops of 2022'
                text='Our best picks for various needs and budgets.'
            />
            <Article 
                img={imageTres}
                number='03'
                title='The Growth of Gaming'
                text='How the pandemic has sparked fresh opportunities.'
            />
            
        </section>
    )
}
