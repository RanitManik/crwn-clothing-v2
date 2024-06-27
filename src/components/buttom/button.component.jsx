import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-action",
  inverted: "inverted",
};

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
