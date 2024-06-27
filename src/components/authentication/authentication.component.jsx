import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpComponent from "../sign-up/sign-up.component.jsx";
import SignInComponent from "../sign-in/sign-in.component.jsx";
import "./authentication.styles.scss";

const AuthenticationComponent = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInComponent />
      <SignUpComponent />
    </div>
  );
};

export default AuthenticationComponent;
