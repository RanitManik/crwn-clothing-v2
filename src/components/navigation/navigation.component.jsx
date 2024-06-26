import { Link } from "react-router-dom";
import { default as logo } from "../../assets/crown.svg";
import "./navigation.component.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context.jsx";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";

const NavigationComponent = () => {
  const { currentUser } = useContext(UserContext);

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
          <span onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationComponent;
