import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../utils/globalStyles";
import theme from "../utils/theme";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";

const StyledContainer = styled.div`
  min-height: calc(100vh - 100px);
  width: 100%;
`;

export default ({ children }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledContainer>{children}</StyledContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
};
