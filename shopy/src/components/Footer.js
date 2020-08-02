import React from "react";
import styled from "styled-components";
import { COLORS_THEME, MEDIA_BREAKPOINTS } from "../styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Text>© aztech 2020</Text>
    </StyledFooter>
  );
};
const StyledFooter = styled.footer`
  width: 100%;
  height: 60px;
  margin-top:auto;
  position:absolute;
  bottom: 0;
  z-index: 19;
  display: flex;
  padding: 20px 24px;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  background-color: ${COLORS_THEME.transparentBackground};
  ${MEDIA_BREAKPOINTS.smallDevices} {
    height: 40px;
    padding: 20px 24px;
  }
`;
const Text = styled.p`
  font-size: 18px;
  ${MEDIA_BREAKPOINTS.smallDevices} {
    font-size: 14px;
  }
`;
