import { useContext, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils.js";
import FormInputComponent from "../form-input/form-input.component.jsx";
import "./sign-in.component.scss";
import ButtonComponent from "../buttom/button.component.jsx";
import { UserContext } from "../../context/user.context.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
    resetFormFields();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      alert("Password should be at least 6 characters!");
      return;
    }

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password,
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("This email address or the password is invalid!");
        return;
      }
      console.log("error connecting to firebase database", error);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComponent
          label="Email"
          name="email"
          required
          type="email"
          onChange={handleChange}
          value={email}
        />

        <FormInputComponent
          label="Password"
          name="password"
          required
          type="password"
          onChange={handleChange}
          value={password}
        />

        <div className="buttons-container">
          <ButtonComponent type="submit">Sign In</ButtonComponent>
          <ButtonComponent
            type="button"
            buttonType="google"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
