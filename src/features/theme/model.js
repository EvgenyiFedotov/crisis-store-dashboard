import * as ef from "effector";
import { themes } from "../../config";

// Contstants
const IS_DARK =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Events
const changeThemeName = ef.createEvent();

// Stores
export const $themeName = ef.createStore(getThemeName());
export const $theme = $themeName.map(getTheme);

// Depends [change theme in system]
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    changeThemeName(event.matches ? "dark" : "light");
  });

// Depends [change $theme]
$themeName.on(changeThemeName, (_, nextTheme) => nextTheme);

// Added
function getThemeName() {
  return IS_DARK ? "dark" : "light";
}

function getTheme(themeName) {
  return themes[themeName];
}
