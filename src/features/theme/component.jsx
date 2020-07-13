import * as React from "react";
import { useStore } from "effector-react";
import { ThemeProvider } from "styled-components";

import { $theme } from "./model";

export function Theme({ children }) {
  const theme = useStore($theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
