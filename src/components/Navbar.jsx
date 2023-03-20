import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context.js"

const Navbar = () => {
    const { cartTotal } = useContext(Context)
    return (
        <nav className="main-nav">
            <Link to="/"><h3> 🍕Pizzería Mamma Mia! </h3></Link>
            <Link to="/carrito"> 🛒 $ {cartTotal()} </Link>
        </nav>
    )
}

export default Navbar