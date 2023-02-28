import { MinusIcon, PlusIcon } from "./atoms/HeroIcons";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../redux/features/cart/CartSlice";
import "./Pages/CartContainer.css"

const CartItem = ({id, img, title, price, amount}) => {
    const dispatch = useDispatch();

  return (
    <article className="cart-item">
        <img src={img} alt="" />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">&yen;{price}</h4>
            <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>削除</button>
        </div>
        <div>
            <button className="amount-btn" onClick={() => dispatch(increase(id))}>
                <PlusIcon />
            </button>
            <p className="item-amount">{amount}</p>
            <button className={"amount-btn " + (amount === 1 && "minus") } onClick={() => {
                dispatch(decrease(id));
            }}>
                <MinusIcon />
            </button>
        </div>
    </article>
  )
}

export default CartItem;