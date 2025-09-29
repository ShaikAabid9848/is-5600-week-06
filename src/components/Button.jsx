const Button = ({ text, handleClick, disabled }) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="pa2 ma2 ba b--black bg-light-gray grow pointer"
    >
      {text}
    </button>
  );
};

export default Button;