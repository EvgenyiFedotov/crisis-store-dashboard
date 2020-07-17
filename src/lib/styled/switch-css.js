export function getSize(sizes = {}, defaultSize) {
  return ({ size = defaultSize }) => {
    switch (size) {
      case "small":
        return sizes.small;
      case "normal":
        return size.normal;
      case "large":
        return sizes.large;
      default:
        return;
    }
  };
}

export function getColor(colors = {}, defaultColor) {
  return ({ color = defaultColor }) => {
    switch (color) {
      case "primary":
        return colors.primary;
      case "secondary":
        return colors.secondary;
      case "error":
        return colors.error;
      case "warn":
        return colors.warn;
      default:
        return;
    }
  };
}
