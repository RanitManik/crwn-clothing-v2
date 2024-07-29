import { default as logo } from "../../assets/crown.svg";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles.jsx";
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
    <NavigationContainer>
      <LogoContainer to="/">
        <img className="logo" src={logo} alt="" />
      </LogoContainer>
      <NavLinks>
        <NavLink to="/shop">SHOP</NavLink>
        {currentUser ? (
          <span onClick={signOutUser}>SIGN OUT</span>
        ) : (
          <NavLink to="/auth">SIGN IN</NavLink>
        )}
        <CartIconComponent />
      </NavLinks>
      {isCartOpen && <CardDropdownComponent />}
    </NavigationContainer>
  );
};

export default NavigationComponent;
