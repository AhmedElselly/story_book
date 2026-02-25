import "./Button.css";

const Button = ({ variant = "primary", children, ...rest }: any) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {variant}
    </button>
  );
};

export default Button;
