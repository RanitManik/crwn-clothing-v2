import { Link } from "react-router-dom";
import { default as logo } from "../../assets/crown.svg";
import "./navigation.component.scss";

const NavigationComponent = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/auth">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default NavigationComponent;
