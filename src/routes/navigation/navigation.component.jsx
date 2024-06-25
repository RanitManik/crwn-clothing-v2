import { Outlet } from "react-router-dom";
import NavigationComponent from "../../components/navigation/navigation.component";

const Navigation = () => {
  return (
    <>
      <NavigationComponent />
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;
