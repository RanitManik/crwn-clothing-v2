import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import FormInputComponent from "../form-input/form-input.component.jsx";
import "./sign-up.component.scss";
import ButtonComponent from "../buttom/button.component.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

const SignUpComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert("Passwords doesn't match!");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserDocumentFromAuth(user, { displayName }).then(
        resetFormFields,
      );
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "This email is already in use. Try signing in or different email...",
        );
        return;
      }
      console.log("error connecting to firebase database", error);
    }
  };

  return (
    <div className="sign-up-container">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h2>Don't Have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComponent
          label="Display name"
          name="displayName"
          required
          type="text"
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInputComponent
          label="Confirm Password"
          name="confirmedPassword"
          required
          type="password"
          onChange={handleChange}
          value={confirmedPassword}
        />

        <ButtonComponent type="submit">Sign Up</ButtonComponent>
      </form>
    </div>
  );
};

export default SignUpComponent;
