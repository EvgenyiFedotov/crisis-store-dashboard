export function getSize(sizes = {}) {
  return ({ size }) => {
    switch (size) {
      case "small":
        return sizes.small;
      case "large":
        return sizes.large;
      case "normal":
        return size.normal;
      default:
        return;
    }
  };
}

export function getColor(colors = {}) {
  return ({ color }) => {
    switch (color) {
      case "primary":
        return colors.primary;
      case "info":
        return colors.info;
      case "error":
        return colors.error;
      case "warn":
        return colors.warn;
      default:
        return;
    }
  };
}
