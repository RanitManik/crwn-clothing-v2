import "./card-dropdown.styles.scss";
import ButtonComponent from "../buttom/button.component.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context.jsx";
import CartItemComponent from "../card-item/cart-item.component.jsx";
import { useNavigate } from "react-router-dom";

const CardDropdownComponent = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent onClick={goToCheckOutHandler}>
        GO TO CHECKOUT
      </ButtonComponent>
    </div>
  );
};

export default CardDropdownComponent;
