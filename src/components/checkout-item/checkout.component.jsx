import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";

const checkoutComponent = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={removeItemHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">
        {quantity}
        </span>
        <div onClick={addItemHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={clearItemHandler} className="remove-button">&#10005;</div>
    </div>
  );
};

export default checkoutComponent;
