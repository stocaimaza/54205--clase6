import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Mi Super Tienda</h1>

        <nav>
            <ul>
                <li>Ropa</li>
                <li>Tecnologia</li>
                <li>Deportes</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar