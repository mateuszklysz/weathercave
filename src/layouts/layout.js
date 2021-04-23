import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../utils/globalStyles";
import theme from "../utils/theme";
import Seo from "../components/SEO/SEO";

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
