import React from "react";
import styled from "styled-components";
import promoHeader from "../../images/promoHeader.jpg";
import { MEDIA_BREAKPOINTS } from "../../styles/mediaBreakpoints";

export const Directory = () => {
  return (
    <PromoPictureContainer>
      <PromoPicture
        style={{ backgroundImage: `url(${promoHeader})` }}
      ></PromoPicture>
    </PromoPictureContainer>
  );
};

const PromoPictureContainer = styled.section`
  width: 100%;
  height: 700px;
  ${MEDIA_BREAKPOINTS.extraSmallDevices} {
    height: 280px;
  }
`;
const PromoPicture = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${MEDIA_BREAKPOINTS.smallDevices} {
    height: 40%
  }
`;
