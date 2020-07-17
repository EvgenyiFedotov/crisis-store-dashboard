export function tv(path, defaultValue = null) {
  return ({ theme }) => {
    let result = theme;
    const pathArr = path.split(".");

    try {
      while (pathArr.length > 0) {
        result = result[pathArr.shift()];
      }
    } catch (error) {
      return defaultValue;
    }

    return result;
  };
}
