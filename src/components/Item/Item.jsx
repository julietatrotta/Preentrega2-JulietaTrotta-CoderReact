import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, vacantes, categoria}) => {
    
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Precio'>
                    Valor: {price}
                </p>
            </section>
            <section>
                <p className='Info'>
                    Vacantes disponibles: {vacantes}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`}>+ Info</Link>
                {/* <button className='DetailsButton'>+ Info</button> */}
            </footer>
        </article>
    )
}

export default Item