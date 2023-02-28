import { Link } from "react-router-dom";
import "./Pages/Products.css";

const ProductsList = ({ currentItems }) => {
  return (
    <div className="product-gap">
    {currentItems.map((item) => (
    <ul className="product-list" key={item.id}>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/productDetail/${item.id}`}>
        <img src={item.img} alt="" />
      </Link>
        <p>{item.title}</p>
        <p>&yen;{item.price}</p>
    </li>
    </ul>
    ))}
    </div>
  )
}

export default ProductsList;