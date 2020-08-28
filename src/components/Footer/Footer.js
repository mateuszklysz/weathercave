import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            date
          }
        }
      }
    `
  );

  return (
    <>
      <StyledFooter>
        <p>
          ©{siteMetadata.date} {siteMetadata.author}. All rights reserved
        </p>
      </StyledFooter>
    </>
  );
};

export default Footer;
