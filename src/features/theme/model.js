import * as ef from "effector";
import { themes } from "../../config";

// Contstants
let IS_DARK = false;

try {
  IS_DARK =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
} catch (error) {
  // pass
}

// Events
const changeThemeName = ef.createEvent();

// Stores
export const $themeName = ef.createStore(getThemeName());
export const $theme = $themeName.map(getTheme);

// Depends [change theme in system]
try {
  window.matchMedia("(prefers-color-scheme: dark)").addListener((event) => {
    changeThemeName(event.matches ? "dark" : "light");
  });
} catch (error) {
  // pass
}

// Depends [change $theme]
$themeName.on(changeThemeName, (_, nextTheme) => nextTheme);

// Added
function getThemeName() {
  return IS_DARK ? "dark" : "light";
}

function getTheme(themeName) {
  return themes[themeName];
}
