import { Link } from "react-router-dom";
import { default as logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context.jsx";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import CartIconComponent from "../cart-icon/cart-icon.component.jsx";
import CardDropdownComponent from "../card-dropdown/card-dropdown.component.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";

const NavigationComponent = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <span onClick={signOutUser}>SIGN OUT</span>
        ) : (
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        )}
        <CartIconComponent />
      </div>
      {isCartOpen && <CardDropdownComponent />}
    </div>
  );
};

export default NavigationComponent;
