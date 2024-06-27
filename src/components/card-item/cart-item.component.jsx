import "./card-item.styles.scss";

// eslint-disable-next-line react/prop-types
const CartItemComponent = ({ cartItem }) => {
  // eslint-disable-next-line react/prop-types
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItemComponent;
