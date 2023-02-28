import { CartIcon, HomeIcon } from "./atoms/HeroIcons";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className="nav-center">
      <h3>Shopping Site</h3>
      <div className="nav-container">
        <Link to={`${process.env.PUBLIC_URL}/`}><HomeIcon /></Link>
        <Link to={`${process.env.PUBLIC_URL}/cart`}><CartIcon /></Link>
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar