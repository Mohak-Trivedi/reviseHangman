import getButtonColor from "./ButtonUtility";

function Button({ type = "button", text, onClickHandler, styleType }) {
  return (
    <button
      onClick={onClickHandler}
      className={`py-2 px-4 text-white rounded-md ${getButtonColor(styleType)}`}
    >
      {text}
    </button>
  );
}

export default Button;
