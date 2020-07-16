export function tv(path) {
  return ({ theme }) => {
    let result = theme;
    const pathArr = path.split(".");

    while (pathArr.length > 0) {
      result = result[pathArr.shift()];
    }

    return result;
  };
}
