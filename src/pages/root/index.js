import * as React from "react";
import { Redirect } from "react-router-dom";

export function PageRoot() {
  return <Redirect to="/main" />;
}
