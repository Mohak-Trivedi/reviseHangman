function getButtonColor(styleType = "primary") {
  switch (styleType) {
    case "primary":
      return "bg-blue-500";
    case "warning":
      return "bg-yellow-500";
    case "error":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
  }
}

export default getButtonColor;
