import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../utils/globalStyles";
import theme from "../utils/theme";
import SEO from "../components/SEO/SEO";

export default ({ children }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};
