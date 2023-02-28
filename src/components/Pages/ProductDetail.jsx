import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.css";
import { addItem, increase } from "../../redux/features/cart/CartSlice";
import itemLists from "../../items";


const ProductDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productId } = useParams();
    const {items} = useSelector((store) => store.cart);

  return (
      <>
      {itemLists.filter((item) => item.id === parseInt(productId))
        .map((item) => (
    <div key={item.id} className="detail-wrapper">
    <h2 className="detail-title">{item.title}</h2>
    <div className="detailItem">
      <div className="detailItem-img">
        <img src={item.img} alt="" />
      </div>
      <div className="detailItem-text">
        <p>
          商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介
          商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介
          商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介商品紹介
        </p>
        <p>&yen;{item.price}</p>
        {items.find(ite => ite.id === item.id) ? (
          <>
          <button className="detail-btn notuse" onClick={() => {dispatch(increase(item.id)); navigate(`${process.env.PUBLIC_URL}/`);} }>カートに入れる</button>
          <p className="detail-attention">※ご覧頂いている商品は既にカートに入っています。</p>
          </>
        ): (
          <button className="detail-btn" onClick={() => {dispatch(addItem(item.id)); navigate(`${process.env.PUBLIC_URL}/`);} }>カートに入れる</button>
        )
      }
      </div>
    </div>
    <Link to={`${process.env.PUBLIC_URL}/`}>←商品ページに戻る</Link>
  </div>
        ))}
      </>
  )
}

export default ProductDetail;