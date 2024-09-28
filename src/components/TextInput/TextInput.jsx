function TextInput({
  type = "text",
  label,
  placeholder = "Enter your input here...",
  onChangeHandler,
}) {
  return (
    <label>
      <span className="text-gray-700">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className="px-4 py-2 border border-gray-500 rounded-md w-full"
      />
    </label>
  );
}

export default TextInput;
