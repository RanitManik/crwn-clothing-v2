import "./product-card.styles.scss";
import ButtonComponent from "../buttom/button.component.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";

// eslint-disable-next-line react/prop-types
const ProductCardComponent = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent onClick={addProductToCart} buttonType="inverted">Add to cart</ButtonComponent>
    </div>
  );
};

export default ProductCardComponent;
