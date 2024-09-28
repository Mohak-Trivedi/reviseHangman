import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  inputType,
  handleFormSubmit,
  handleTextInputChange,
  handleShowHideClick,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          type={inputType}
          label={"Enter a word or a phrase"}
          placeholder="Enter a word or a phrase here..."
          onChangeHandler={handleTextInputChange}
        />
      </div>
      <div>
        <Button
          text={inputType === "password" ? "Show" : "Hide"}
          styleType="warning"
          onClickHandler={handleShowHideClick}
        />
      </div>
      <div>
        <Button type="submit" text="Submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
